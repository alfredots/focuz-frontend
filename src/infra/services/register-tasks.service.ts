import { Task } from '@/contracts/task.entity';
import { UseCase } from '@/contracts/user-case';
import { HttpClient, HttpStatusCode, makeAxiosHttpClient } from '@/packages/http';
import { endpoints } from '@/utils/constants';

export class RegisterTasksService implements UseCase<Task[], Promise<void>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient
  ) {}

  async execute(tasks: Task[]): Promise<void> {
    // Dispara um PUT para cada Task em paralelo
    const results = await Promise.allSettled(
      tasks.map((task) =>
        this.http.request({
          url: `${this.url}/tasks/${task.id}`,
          method: 'put',
          body: {
            title: task.name,
            is_completed: task.done
          }
        })
      )
    );

    // Verifica se algum PUT falhou
    const errors = results.filter((r) => r.status === 'fulfilled' && r.value.statusCode !== HttpStatusCode.ok);
    const rejected = results.filter((r) => r.status === 'rejected');

    if (errors.length > 0 || rejected.length > 0) {
      throw new Error('Falha ao atualizar alguns hábitos');
    }
  }
}

export const makeRegisterTasksService = () => new RegisterTasksService(endpoints.focuz, makeAxiosHttpClient());
