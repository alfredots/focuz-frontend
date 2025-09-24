import { makeCreateTaskService } from '@/infra/services/create-task.service';
import { useCreateTaskModel } from '@/pages/create-task/-create-task.model';
import { CreateTaskView } from '@/pages/create-task/-create-task.view';
import { useMemo } from 'react';

export const CreateTaskPage = () => {
  const createTaskService = useMemo(() => makeCreateTaskService(), []);
  const methods = useCreateTaskModel({
    createTask: createTaskService
  });

  return <CreateTaskView {...methods} />;
};
