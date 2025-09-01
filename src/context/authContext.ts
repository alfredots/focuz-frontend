import { UserRemoteDTO } from '../infra/dtos/user-remote.dto'; // Importa o DTO do usuário remoto

/**
 * @interface AuthState
 * @description Define a estrutura do estado de autenticação da aplicação.
 * @property {boolean} isAuthenticated - Indica se o usuário está autenticado.
 * @property {UserRemoteDTO | null} user - Os dados do usuário autenticado, ou null se não estiver autenticado.
 * @property {string | null} token - O token de autenticação (JWT), ou null.
 * @property {boolean} isLoading - Indica se o estado de autenticação está sendo carregado/verificado.
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: UserRemoteDTO | null;
  token: string | null;
  isLoading: boolean;
}

/**
 * @interface AuthContextType
 * @description Define a estrutura do objeto de contexto de autenticação,
 * incluindo o estado e as funções para modificá-lo.
 * @property {AuthState} state - O estado atual da autenticação.
 * @property {(userData: UserRemoteDTO, token: string) => void} login - Função para logar um usuário.
 * @property {() => void} logout - Função para deslogar o usuário.
 */
export interface AuthContextType {
  state: AuthState;
  login: (userData: UserRemoteDTO, token: string) => void;
  logout: () => void;
}
