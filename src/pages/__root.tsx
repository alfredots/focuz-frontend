import { BottomNav } from '@/layout/bottom-nav';
import { Header } from '@/layout/header';
import { Outlet, createRootRoute, useNavigate, useRouterState } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  const navigate = useNavigate();
  const user = { name: 'Alfredo Tito' };

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    // limpar token/localStorage/etc.
    localStorage.clear();
    navigate({ to: '/auth/login' });
  };

  // Pegando a rota atual
  const location = useRouterState({
    select: (state) => state.location // extrai só a parte da localização
  });

  const isAuth = location.pathname.includes('auth');

  const token = localStorage.getItem('authToken');

  if (!isAuth && !token) {
    navigate({ to: '/auth/login' });
    return null;
  }

  return (
    <div className="bg-stone-900 w-full h-full">
      {!isAuth && <Header user={user} onLogout={handleLogout} />}
      <Outlet />
      {!isAuth && <BottomNav />}
    </div>
  );
}
