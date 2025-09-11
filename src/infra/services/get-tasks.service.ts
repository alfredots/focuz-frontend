import { TaskRemoteDTO } from '@/infra/dtos/task-remote.dto';
import { endpoints } from '@/utils/constants';
import { HttpClient, HttpStatusCode, makeAxiosHttpClient } from '@/packages/http';
import { Mapper } from '@/contracts/mapper';
import { UseCase } from '@/contracts/user-case';
import { Task } from '@/contracts/task.entity';
import { makeTaskMapper } from '@/infra/mappers/task.mapper';

class GetTasksService implements UseCase<void, Promise<Task[]>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient,
    private readonly mapper: Mapper<TaskRemoteDTO, Task>
  ) {}

  async execute(): Promise<Task[]> {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      throw new Error('No auth token found');
    }

    const response = await this.http.request<TaskRemoteDTO[]>({
      url: this.url + '/tasks',
      method: 'get',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    if (response.body === undefined) {
      throw new Error('Retornou Undefined');
    }

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body.map((data) => this.mapper.transform(data));

      default:
        throw new Error('');
    }
  }
}

export const makeGetTasksService = () => new GetTasksService(endpoints.focuz, makeAxiosHttpClient(), makeTaskMapper());
