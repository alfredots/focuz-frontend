import { CreateTaskPage } from '@/pages/create-task/-create-task.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create-task/')({
  component: RouteComponent
});

function RouteComponent() {
  return <CreateTaskPage />;
}
