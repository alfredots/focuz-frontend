import { makeGetTasksService } from '@/infra/services/get-tasks.service';
import { useHabitsModel } from '@/pages/-habits/-habits.model';
import { HabitsView } from '@/pages/-habits/-habits.view';
import { useMemo } from 'react';

export const HabitsPage = () => {
  const getTasksService = useMemo(() => makeGetTasksService(), []);
  const methods = useHabitsModel({ getTasks: getTasksService });

  return <HabitsView {...methods} />;
};
