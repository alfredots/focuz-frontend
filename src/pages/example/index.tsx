import { UsersPage } from '@/pages/example/-users.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/example/')({
  component: RouteComponent
});

function RouteComponent() {
  return <UsersPage />;
}
