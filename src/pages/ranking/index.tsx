import { RankingPage } from '@/pages/ranking/-ranking.page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ranking/')({
  component: RouteComponent,
  loader: () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // lança erro para redirecionar
      throw new Error('Usuário não autenticado');
    }
  }
});

function RouteComponent() {
  return <RankingPage />;
}
