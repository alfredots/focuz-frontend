import { useLoginModel } from '@/pages/auth/login/-login.model';

export const LoginView = (props: ReturnType<typeof useLoginModel>) => {
  const { errorMessage, handleSubmit, mutation } = props;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-stone-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Logo da empresa */}
        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Faça login na sua conta</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && <div className="text-center text-sm font-semibold text-red-500 mb-4">{errorMessage}</div>}

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

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                Senha
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-red-400 hover:text-red-300">
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
                className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              {mutation.isPending ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-stone-300">
          Não é um membro?{' '}
          <a href="/auth/register" className="font-semibold text-red-400 hover:text-red-300">
            Crie sua conta
          </a>
        </p>
      </div>
    </div>
  );
};
