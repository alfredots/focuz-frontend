import React from 'react';

type HabitProps = {
  name: string;
  done: boolean;
  onToggle: () => void;
};

export const Habit: React.FC<HabitProps> = ({ name, done, onToggle }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={done}
        onChange={onToggle}
        className="form-checkbox h-5 w-5 text-green-600 border-gray-400 focus:ring-green-500"
      />
      <span className={done ? 'text-white font-semibold' : 'text-white'}>
        {name} {done ? '✅' : ''}
      </span>
    </label>
  );
};
