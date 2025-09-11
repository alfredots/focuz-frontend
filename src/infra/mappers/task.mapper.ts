import { TaskRemoteDTO } from '@/infra/dtos/task-remote.dto';
import { Mapper } from '@/contracts/mapper';
import { Task } from '@/contracts/task.entity';

export class TaskMapperImpl implements Mapper<TaskRemoteDTO, Task> {
  transform(data: TaskRemoteDTO): Task {
    return {
      id: data.id,
      name: data.title,
      done: data.is_completed
    };
  }
}

export const makeTaskMapper = () => new TaskMapperImpl();
