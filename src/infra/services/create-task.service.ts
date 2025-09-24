import { CreateTaskDTO } from '@/contracts/create-task.dto';
import { UseCase } from '@/contracts/user-case';
import { HttpClient, HttpStatusCode, makeAxiosHttpClient } from '@/packages/http';
import { endpoints } from '@/utils/constants';

export class CreateTaskService implements UseCase<CreateTaskDTO, Promise<void>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient
  ) {}

  async execute(data: CreateTaskDTO): Promise<void> {
    const response = await this.http.request({
      url: this.url + '/tasks',
      method: 'post',
      body: data
    });

    switch (response.statusCode) {
      case HttpStatusCode.created:
        return;

      default:
        throw new Error('');
    }
  }
}

export const makeCreateTaskService = () => new CreateTaskService(endpoints.focuz, makeAxiosHttpClient());
