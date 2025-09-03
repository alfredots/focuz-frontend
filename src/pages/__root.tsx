import { Header } from '@/components/header';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  const user = { name: 'Alfredo Tito' };

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    // aqui você limpa o token, localStorage, etc.
  };

  return (
    <div className="bg-stone-900 w-full h-full">
      <Header user={user} onLogout={handleLogout} />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
