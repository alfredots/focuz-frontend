import { HabitsPage } from '@/pages/habits/-habits.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/habits/')({
  component: RouteComponent
});

function RouteComponent() {
  return <HabitsPage />;
}
