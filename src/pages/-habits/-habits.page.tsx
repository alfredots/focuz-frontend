import { makeGetTasksService } from '@/infra/services/get-tasks.service';
import { makeRegisterTasksService } from '@/infra/services/register-tasks.service';
import { useHabitsModel } from '@/pages/-habits/-habits.model';
import { HabitsView } from '@/pages/-habits/-habits.view';
import { useMemo } from 'react';

export const HabitsPage = () => {
  const getTasksService = useMemo(() => makeGetTasksService(), []);
  const registerTasksService = useMemo(() => makeRegisterTasksService(), []);
  const methods = useHabitsModel({ getTasks: getTasksService, registerTasks: registerTasksService });

  return <HabitsView {...methods} />;
};
