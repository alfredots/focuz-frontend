import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/modules/users/services/dtos/user-remote.dto';
import { Mapper } from '@/packages/common';

export class UserMapperImpl implements Mapper<UserRemoteDTO, User> {
  transform(data: UserRemoteDTO): User {
    return {
      id: data.id,
      name: data.name,
      email: data.email
    } as User;
  }
}

export const makeUserMapper = () => new UserMapperImpl();
