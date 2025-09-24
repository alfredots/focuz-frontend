import { Task } from '@/contracts/task.entity';
import { UseCase } from '@/contracts/user-case';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type UseHabitsModelProps = {
  getTasks: UseCase<void, Promise<Task[]>>;
  registerTasks: UseCase<Task[], Promise<void>>; // Novo caso de uso para registrar hábitos
};

export const useHabitsModel = ({ getTasks, registerTasks }: UseHabitsModelProps) => {
  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => getTasks.execute()
  });

  const [tasksState, setTasksState] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // mutation para registrar os hábitos
  const mutation = useMutation({
    mutationFn: (habits: Task[]) => registerTasks.execute(habits),
    onSuccess: () => {
      setShowModal(false);
      setErrorMessage(null);
      console.log('Hábitos registrados com sucesso!');
      refetch(); // opcional, caso queira atualizar a lista após registrar
    },
    onError: (error) => {
      console.error('Erro ao registrar hábitos:', error);
      setErrorMessage('Não foi possível registrar os hábitos. Tente novamente.');
    }
  });

  const handleToggle = (id: number) => {
    setTasksState((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const handleRegister = () => {
    setErrorMessage(null);
    mutation.mutate(tasksState);
  };

  useEffect(() => {
    if (isSuccess) {
      setTasksState(data);
    }
  }, [isSuccess, data]);

  return {
    isLoading,
    mutation,
    errorMessage,
    handleRegister,
    handleToggle,
    tasksState,
    showModal,
    setShowModal
  };
};
