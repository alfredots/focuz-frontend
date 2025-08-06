import { User } from '@/contracts/user';
import { UseCase } from '@/contracts/user-case';
import { makeGetUsersService } from '@/infra/services/get-users.service';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';

//model - Lida com a lógica de dados, consulta o useQuery e retorna os dados.
const useUsersModel = ({ getUsers }: { getUsers: UseCase<void, Promise<User[]>> }) => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsers.execute() });

  return {
    users: data || []
  };
};

//model-view - Orquestra o modelo e prepara os dados para a View.
const UsersPage = () => {
  const getUsersService = useMemo(() => makeGetUsersService(), []);
  const methods = useUsersModel({ getUsers: getUsersService });

  return <UsersView {...methods} />;
};

//view - Apresenta os dados na tela.
export const UsersView = (props: ReturnType<typeof useUsersModel>) => {
  const { users } = props;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const Route = createFileRoute('/example/')({
  component: RouteComponent
});

function RouteComponent() {
  return <UsersPage />;
}
