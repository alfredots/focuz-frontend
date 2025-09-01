import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../infra/services/authService';
import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { UserRemoteDTO } from '../../infra/dtos/user-remote.dto';

interface LoginApiResponse {
  message: string;
  user: UserRemoteDTO;
  access_token: string;
  token_type: string;
}

export const Route = createFileRoute('/auth/login')({
  component: LoginPage
});

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginApiResponse) => {
      console.log('Login realizado com sucesso!', data);

      const user = data.user;
      const token = data.access_token;

      login(user, token);
      navigate({ to: '/' });
    },
    onError: (error) => {
      console.error('Erro no login:', error);
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setErrorMessage(null); // Limpa mensagens de erro anteriores

    mutation.mutate({
      email: data.email as string,
      password: data.password as string
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Logo da empresa*/}
        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Faça login na sua conta</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && <div className="text-center text-sm font-semibold text-red-600 mb-4">{errorMessage}</div>}

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Endereço de e-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Senha
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {mutation.isPending ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Não é um membro?{' '}
          <a href="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Crie sua conta
          </a>
        </p>
      </div>
    </div>
  );
}
