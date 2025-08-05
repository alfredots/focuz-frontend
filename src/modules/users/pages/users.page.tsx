import { useMemo } from 'react';

import { useUsersModel } from '@/modules/users/pages/users.model';
import { UsersView } from '@/modules/users/pages/users.view';
import { makeGetUsersService } from '@/modules/users/services/get-users.service';

export function UsersPage() {
  const getUsersService = useMemo(() => makeGetUsersService(), []);
  const methods = useUsersModel({ getUsers: getUsersService });

  return <UsersView {...methods} />;
}
