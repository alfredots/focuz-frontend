import { makeGetUsersService } from '@/infra/services/get-users.service';
import { useUsersModel } from '@/pages/example/-user.model';
import { UsersView } from '@/pages/example/-user.view';
import { useMemo } from 'react';

//model-view - Orquestra o modelo e prepara os dados para a View.
export const UsersPage = () => {
  const getUsersService = useMemo(() => makeGetUsersService(), []);
  const methods = useUsersModel({ getUsers: getUsersService });

  return <UsersView {...methods} />;
};
