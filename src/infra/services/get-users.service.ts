import { User } from '@/contracts/user';
import { UserRemoteDTO } from '@/infra/dtos/user-remote.dto';
import { makeUserMapper } from '@/infra/mappers/user.mapper';
import { endpoints } from '@/utils/constants';
import { HttpClient, HttpStatusCode, makeFetchHttpClient } from '@/packages/http';
import { Mapper } from '@/contracts/mapper';
import { UseCase } from '@/contracts/user-case';

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
