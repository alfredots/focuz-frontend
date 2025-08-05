/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '.';

class FetchHttpClient implements HttpClient {
  async request<R = any>(data: HttpRequest): Promise<HttpResponse<R>> {
    const { url, method, body, headers } = data;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    });

    const statusCode = response.status as HttpStatusCode;

    let responseBody;
    try {
      responseBody = await response.json();
    } catch (error) {
      responseBody = error;
    }

    return {
      statusCode,
      body: responseBody
    };
  }
}

export const makeFetchHttpClient = () => new FetchHttpClient();
