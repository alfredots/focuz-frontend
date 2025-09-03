import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../infra/services/authService';
import { useState } from 'react';

export const Route = createFileRoute('/auth/register')({
  component: RegisterPage
});

function RegisterPage() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log('Usuário criado com sucesso!', data);
      setSuccessMessage('Usuário criado com sucesso! Redirecionando para o login...');

      setTimeout(() => {
        navigate({ to: '/auth/login' });
      }, 2000);
    },
    onError: (error) => {
      console.error('Erro ao criar usuário:', error);
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    mutation.mutate({
      name: data.name as string,
      email: data.email as string,
      password: data.password as string,
      password_confirmation: data.password_confirmation as string
    });
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8 bg-stone-900">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Crie sua conta</h2>
      </div>

      <div className="mt-10 w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-stone-800 p-8 rounded-lg shadow-xl border border-stone-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          {successMessage && <div className="text-center text-sm font-semibold text-green-500 col-span-full mb-4">{successMessage}</div>}
          {mutation.isError && (
            <div className="text-center text-sm font-semibold text-red-500 col-span-full mb-4">
              Ocorreu um erro no registro. Por favor, tente novamente.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Nome completo */}
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-white">
                Nome completo
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Endereço de e-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Confirmar senha */}
            <div>
              <label htmlFor="password_confirmation" className="block text-sm/6 font-medium text-white">
                Confirmar senha
              </label>
              <div className="mt-2">
                <input
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          {/* Botão de registrar */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              {mutation.isPending ? 'Criando...' : 'Registrar'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-stone-300">
          Já tem uma conta?{' '}
          <a href="/auth/login" className="font-semibold text-red-400 hover:text-red-300">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
