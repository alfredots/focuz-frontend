import { UseCase } from '@/contracts/user-case';
import { LoginRequestDTO } from '@/infra/dtos/login-request.dto';
import { LoginApiResponse } from '@/infra/services/authService';
import { HttpClient, HttpStatusCode, makeAxiosHttpClient } from '@/packages/http';
import { endpoints } from '@/utils/constants';

class LoginUserService implements UseCase<LoginRequestDTO, Promise<LoginApiResponse>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient
  ) {}

  async execute(data: LoginRequestDTO): Promise<LoginApiResponse> {
    const response = await this.http.request({
      url: this.url + '/login',
      method: 'post',
      body: data
    });

    console.log();

    if (response.body === undefined) {
      throw new Error('Retornou Undefined');
    }

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body;

      default:
        throw new Error('');
    }
  }
}

export const makeLoginUserService = new LoginUserService(endpoints.focuz, makeAxiosHttpClient());
