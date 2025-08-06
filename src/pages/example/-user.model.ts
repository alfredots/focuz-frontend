import { User } from '@/contracts/user';
import { UseCase } from '@/contracts/user-case';
import { useQuery } from '@tanstack/react-query';

//model - Lida com a lógica de dados, consulta o useQuery e retorna os dados.
export const useUsersModel = ({ getUsers }: { getUsers: UseCase<void, Promise<User[]>> }) => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsers.execute() });

  return {
    users: data || []
  };
};
