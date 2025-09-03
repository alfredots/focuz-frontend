import { LoginPage } from '@/pages/auth/login/-login.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/login/')({
  component: RouteComponent
});

function RouteComponent() {
  return <LoginPage />;
}
