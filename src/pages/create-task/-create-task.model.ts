import { CreateTaskDTO } from '@/contracts/create-task.dto';
import { UseCase } from '@/contracts/user-case';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';

type UseCreateTaskModel = {
  createTask: UseCase<CreateTaskDTO, Promise<void>>;
};

export const useCreateTaskModel = ({ createTask }: UseCreateTaskModel) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: CreateTaskDTO) => createTask.execute(data),
    onSuccess: () => {
      console.log('Tarefa criada com sucesso!');
      navigate({ to: '/' }); // redireciona para a lista de tarefas, ajuste conforme sua rota
    },
    onError: (error) => {
      console.error('Erro ao criar tarefa:', error);
      setErrorMessage('Não foi possível criar a tarefa. Tente novamente.');
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setErrorMessage(null); // Limpa mensagens de erro anteriores

    mutation.mutate({
      title: data.title as string,
      description: data.description as string,
      is_completed: false // default ao criar
    });
  };

  return {
    errorMessage,
    mutation,
    handleSubmit
  };
};
