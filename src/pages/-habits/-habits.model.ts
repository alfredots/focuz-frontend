import { Task } from '@/contracts/task.entity';
import { UseCase } from '@/contracts/user-case';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type UseHabitsModelProps = {
  getTasks: UseCase<void, Promise<Task[]>>;
};

export const useHabitsModel = ({ getTasks }: UseHabitsModelProps) => {
  const { data, isLoading, isSuccess } = useQuery({ queryKey: ['tasks'], queryFn: () => getTasks.execute() });

  const [tasksState, setTasksState] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (id: number) => {
    setTasksState((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const handleRegister = async () => {
    try {
      await fetch('/api/habits/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ habits: tasksState })
      });
      setShowModal(false);
      // Você pode adicionar um feedback visual aqui se quiser
    } catch (error) {
      console.error('Erro ao registrar hábitos:', error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTasksState(data);
    }
  }, [isSuccess, data]);

  return { isLoading, handleRegister, showModal, handleToggle, tasksState, setShowModal };
};
