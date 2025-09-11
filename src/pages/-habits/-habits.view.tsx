import { Habit } from '@/components/habit';
import { ConfirmationModal } from '@/components/confirmation-modal';
import { useHabitsModel } from '@/pages/-habits/-habits.model';
import React, { useState } from 'react';

export const HabitsView = (props: ReturnType<typeof useHabitsModel>) => {
  const [habitsState, setHabitsState] = useState(props.habits);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (id: number) => {
    setHabitsState((prev) => prev.map((habit) => (habit.id === id ? { ...habit, done: !habit.done } : habit)));
  };

  const handleRegistrar = async () => {
    try {
      await fetch('/api/habits/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ habits: habitsState })
      });
      setShowModal(false);
      // Você pode adicionar um feedback visual aqui se quiser
    } catch (error) {
      console.error('Erro ao registrar hábitos:', error);
    }
  };

  return (
    <div className="w-full h-svh p-4 mt-16">
      <h1 className="text-white text-3xl text-center pt-8">Seus hábitos</h1>
      <div className="flex flex-col gap-6 p-6 max-w-md mx-auto text-center">
        <p className="text-gray-300 text-base">
          Marque cada hábito quando completá-lo no dia. Cada hábito concluído vale 1 ponto, e ao completar os 7 você fecha sua meta diária de 7
          pontos.
        </p>

        <div className="flex flex-col gap-4">
          {habitsState.map((habit) => (
            <Habit key={habit.name} name={habit.name} done={habit.done} onToggle={() => handleToggle(habit.id)} />
          ))}
        </div>
        <button onClick={() => setShowModal(true)} className="mt-8 px-6 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700">
          Registrar
        </button>
        <ConfirmationModal
          open={showModal}
          text="Tem certeza que deseja registrar os hábitos marcados?"
          onConfirm={handleRegistrar}
          onCancel={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};
