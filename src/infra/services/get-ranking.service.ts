import { Ranking } from '@/contracts/ranking.entity';
import { endpoints } from '@/utils/constants';
import { HttpClient, HttpStatusCode, makeAxiosHttpClient } from '@/packages/http';
import { UseCase } from '@/contracts/user-case';

class GetRankingService implements UseCase<void, Promise<Ranking>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient
  ) {}

  async execute(): Promise<Ranking> {
    const response = await this.http.request<Ranking>({
      url: this.url + '/ranking',
      method: 'get'
    });

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

export const makeGetRankingService = () => new GetRankingService(endpoints.focuz, makeAxiosHttpClient());
