import { useHabitsModel } from '@/pages/-habits/-habits.model';
import { HabitsView } from '@/pages/-habits/-habits.view';

export const HabitsPage = () => {
  const methods = useHabitsModel();

  return <HabitsView {...methods} />;
};
