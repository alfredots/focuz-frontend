import { User } from '@/contracts/user';
import { UserRemoteDTO } from '@/infra/dtos/user-remote.dto';
import { Mapper } from '@/contracts/mapper';

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
