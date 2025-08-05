import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/modules/users/services/dtos/user-remote.dto';
import { makeUserMapper } from '@/modules/users/services/mappers/user.mapper';
import { endpoints } from '@/modules/users/utils/constants';
import { Mapper, UseCase } from '@/packages/common';
import { HttpClient, HttpStatusCode, makeFetchHttpClient } from '@/packages/http';

class GetUsersService implements UseCase<void, Promise<User[]>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient,
    private readonly mapper: Mapper<UserRemoteDTO, User>
  ) {}

  async execute(): Promise<User[]> {
    const response = await this.http.request<UserRemoteDTO[]>({
      url: this.url,
      method: 'get'
    });

    if (response.body === undefined) {
      throw new Error('Retornou Undefined');
    }

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body.map((data) => this.mapper.transform(data));

      default:
        throw new Error('');
    }
  }
}

export const makeGetUsersService = () => new GetUsersService(endpoints.users, makeFetchHttpClient(), makeUserMapper());
