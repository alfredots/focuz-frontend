import api from '../api';
import { RegisterRequestDTO } from '../dtos/register-request.dto';
import { LoginRequestDTO } from '../dtos/login-request.dto';
import { UserRemoteDTO } from '../dtos/user-remote.dto';

export interface LoginApiResponse {
  message: string;
  user: UserRemoteDTO;
  access_token: string;
  token_type: string;
}

export const registerUser = async (data: RegisterRequestDTO): Promise<UserRemoteDTO> => {
  const response = await api.post<UserRemoteDTO>('/register', data);
  return response.data;
};

export const loginUser = async (credentials: LoginRequestDTO): Promise<LoginApiResponse> => {
  const response = await api.post<LoginApiResponse>('/login', credentials);
  return response.data;
};
