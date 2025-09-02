import React, { useState } from 'react';

type HabitProps = {
  id: number;
  name: string;
  done: boolean;
};

export const Habit: React.FC<HabitProps> = ({ id, name, done }) => {
  const [isDone, setIsDone] = useState(done);

  const toggleHabit = async () => {
    try {
      // manda pro backend
      await fetch(`/api/habits/${id}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !isDone })
      });

      // atualiza no frontend
      setIsDone(!isDone);
    } catch (error) {
      console.error('Erro ao atualizar hábito:', error);
    }
  };

  return (
    <button
      onClick={toggleHabit}
      className={`px-4 py-2 rounded-md border ${isDone ? 'bg-green-600 text-white border-green-600' : 'bg-gray-200 text-gray-800 border-gray-400'}`}
    >
      {name} {isDone ? '✅' : ''}
    </button>
  );
};
