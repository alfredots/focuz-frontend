import { Habit } from '@/components/habit';
import { Header } from '@/components/header';
import { RankingList } from '@/components/ranking-list';
import { users } from '@/mocks/users.mock';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent
});

function RouteComponent() {
  const user = { name: 'Alfredo Tito' };

  const handleLogout = () => {
    console.log('Usuário deslogado!');
    // aqui você limpa o token, localStorage, etc.
  };

  return (
    <div className="bg-stone-900 w-full h-full">
      {/* Header */}
      <Header user={user} onLogout={handleLogout} />
      {/* Seção de ranking */}
      <div className="w-full p-4">
        <h1 className="text-white text-3xl text-center">Ranking de pontuação</h1>
        <RankingList users={users} />
      </div>

      {/* Seção de check de atividades */}
      <div className="w-full p-4">
        <h1 className="text-white text-3xl text-center">Seus hábitos</h1>
        <div className="flex flex-col gap-6 p-6 max-w-md mx-auto text-center">
          <p className="text-gray-300 text-base">
            Marque cada hábito quando completá-lo no dia. Cada hábito concluído vale 1 ponto, e ao completar os 7 você fecha sua meta diária de 7
            pontos.
          </p>

          <div className="flex flex-col gap-4">
            <Habit id={1} name="Academia" done={false} />
            <Habit id={2} name="Leitura" done={false} />
            <Habit id={3} name="Meditação" done={false} />
            <Habit id={4} name="Água" done={false} />
            <Habit id={5} name="Sono" done={false} />
            <Habit id={6} name="Alimentação saudável" done={false} />
            <Habit id={7} name="Organização" done={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
