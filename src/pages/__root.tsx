import { BottomNav } from '@/layout/bottom-nav';
import { Header } from '@/layout/header';
import { Outlet, createRootRoute } from '@tanstack/react-router';

// Root com layout (Header + BottomNav)
export const AppRoute = createRootRoute({
  component: AppRootComponent
});

function AppRootComponent() {
  const user = { name: 'Alfredo Tito' };

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    // limpar token/localStorage/etc.
  };

  return (
    <div className="bg-stone-900 w-full h-full">
      <Header user={user} onLogout={handleLogout} />
      <Outlet />
      <BottomNav />
    </div>
  );
}

// Root sem layout (auth)
export const AuthRoute = createRootRoute({
  component: AuthRootComponent
});

function AuthRootComponent() {
  return (
    <div className="bg-stone-900 w-full h-full">
      <Outlet />
    </div>
  );
}
