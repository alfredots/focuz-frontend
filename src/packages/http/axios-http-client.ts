import axios, { AxiosError, AxiosResponse } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '.';

export interface ErrorDetail {
  code: string;
  message: string;
}

export interface ErrorResponse {
  errors: ErrorDetail[];
  success: boolean;
}

export interface BackendErrorResponse {
  errors: { [key: string]: string[] } | ErrorDetail[];
  type?: string;
  title?: string;
  status?: number;
  traceId?: string;
  success?: boolean;
}

class AxiosHttpClient implements HttpClient {
  async request<R>(data: HttpRequest): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse;

    try {
      // pega o token do localStorage
      const token = localStorage.getItem('authToken');

      // Rotas que ficam abertas (sem token)
      const openRoutes = ['/ogin', '/register'];

      const isOpenRoute = openRoutes.some((route) => data.url?.endsWith(route));

      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: {
          ...data.headers,
          ...(token && !isOpenRoute ? { Authorization: `Bearer ${token}` } : {})
        }
      });
    } catch (er) {
      const error = er as AxiosError;
      const status = error.response?.status || 0;
      const message = error.response?.data || error.message;

      axiosResponse = {
        status,
        data: message,
        statusText: String(error.status),
        headers: error.response?.headers || {},
        config: error.config!
      };
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data
    };
  }
}

export const makeAxiosHttpClient = () => new AxiosHttpClient();
