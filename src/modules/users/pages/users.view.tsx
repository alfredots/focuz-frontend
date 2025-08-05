import { useUsersModel } from '@/modules/users/pages/users.model';

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
