import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { UserRemoteDTO } from '../infra/dtos/user-remote.dto'; // DTO do usuário remoto
import { AuthState, AuthContextType } from './authContext'; // Tipos que definimos no passo 1

// 1. Criação do contexto de autenticação
// O valor inicial é 'undefined' porque o contexto será fornecido pelo AuthProvider.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * @interface AuthProviderProps
 * @description Propriedades para o componente AuthProvider.
 * @property {ReactNode} children - Os elementos filhos que serão envolvidos pelo provedor.
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * @function AuthProvider
 * @description Componente provedor de autenticação.
 * Gerencia o estado de autenticação, persiste dados no localStorage e expõe o contexto.
 * @param {AuthProviderProps} { children } - Os componentes filhos.
 * @returns {JSX.Element} O provedor de contexto envolvendo os filhos.
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Estado inicial de autenticação
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true // Começa como true para indicar que estamos verificando o localStorage
  });

  // Efeito para verificar o token no localStorage ao montar o componente
  useEffect(() => {
    // Tenta obter o token e os dados do usuário do localStorage
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');

    if (storedToken && storedUser) {
      try {
        // Se ambos existirem, tenta fazer o parse dos dados do usuário
        const user = JSON.parse(storedUser) as UserRemoteDTO;
        setState({
          isAuthenticated: true,
          user: user,
          token: storedToken,
          isLoading: false // Concluiu a verificação
        });
      } catch (error) {
        console.error('Erro ao fazer parse dos dados do usuário armazenados:', error);
        // Se houver um erro no parse (dados corrompidos), limpa o localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        setState((prevState) => ({ ...prevState, isLoading: false })); // Concluiu a verificação com falha
      }
    } else {
      // Se não houver token ou usuário, define o estado como não autenticado e conclui a verificação
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }, []); // O array vazio garante que este efeito roda apenas uma vez (no mount)

  /**
   * @function login
   * @description Função para realizar o login do usuário.
   * Armazena os dados do usuário e o token no localStorage e atualiza o estado.
   * @param {UserRemoteDTO} userData - Os dados do usuário.
   * @param {string} token - O token de autenticação.
   */
  const login = (userData: UserRemoteDTO, token: string) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', JSON.stringify(userData));
    setState({
      isAuthenticated: true,
      user: userData,
      token: token,
      isLoading: false
    });
  };

  /**
   * @function logout
   * @description Função para realizar o logout do usuário.
   * Remove os dados do localStorage e atualiza o estado para não autenticado.
   */
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setState({
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false
    });
  };

  // O provedor disponibiliza o estado e as funções de login/logout para os filhos
  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};

/**
 * @function useAuth
 * @description Hook customizado para consumir o contexto de autenticação.
 * Facilita o acesso ao estado e às funções de login/logout em qualquer componente.
 * @returns {AuthContextType} O objeto de contexto de autenticação.
 * @throws {Error} Se usado fora de um AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
