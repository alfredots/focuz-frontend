import { useCreateTaskModel } from '@/pages/create-task/-create-task.model';

export const CreateTaskView = (props: ReturnType<typeof useCreateTaskModel>) => {
  const { errorMessage, handleSubmit, mutation } = props;

  return (
    <div className="flex h-svh flex-col justify-center px-6 py-12 lg:px-8 bg-stone-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Criar nova tarefa</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && <div className="text-center text-sm font-semibold text-red-500 mb-4">{errorMessage}</div>}

          {/* Campo Title */}
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium text-white">
              Título da tarefa
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Ex: Comprar mantimentos"
                className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Campo Description */}
          <div>
            <label htmlFor="description" className="block text-sm/6 font-medium text-white">
              Descrição
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                placeholder="Adicione detalhes da tarefa..."
                className="block w-full rounded-md border-0 bg-stone-700 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-stone-600 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Botão */}
          <div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              {mutation.isPending ? 'Criando...' : 'Criar tarefa'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
