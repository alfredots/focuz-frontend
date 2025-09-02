import React from 'react';

type User = {
  id: number;
  name: string;
  points: number;
};

type RankingListProps = {
  users: User[];
};

function InitialAvatar({ name, className = '' }: { name: string; className?: string }) {
  const initial = (name?.trim()?.[0] ?? '?').toUpperCase();

  // paleta tailwind para variar as cores entre usuários
  const palette = ['bg-red-600', 'bg-blue-600', 'bg-emerald-600', 'bg-amber-600', 'bg-violet-600', 'bg-sky-600', 'bg-pink-600', 'bg-teal-600'];

  // hash simples para escolher cor de forma estável
  const hash = Array.from(name).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const color = palette[hash % palette.length];

  return (
    <div
      className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center font-semibold ring-2 ring-red-900 ${className}`}
      aria-label={`Avatar de ${name}`}
      role="img"
    >
      <span aria-hidden="true">{initial}</span>
    </div>
  );
}

export const RankingList: React.FC<RankingListProps> = ({ users }) => {
  return (
    <div className="bg-stone-900 shadow-md shadow-black rounded-md overflow-hidden max-w-lg mx-auto mt-16">
      <div className="bg-stone-800 py-2 px-4 border-b border-red-900">
        <h2 className="text-xl font-semibold text-white">Top Users</h2>
      </div>
      <ul className="divide-y divide-red-900">
        {users.map((user, index) => (
          <li key={user.id} className="flex items-center py-4 px-6">
            <span className="text-gray-300 text-lg font-medium mr-4">{index + 1}.</span>

            <InitialAvatar name={user.name} className="mr-4" />

            <div className="flex-1">
              <h3 className="text-lg font-medium text-white">{user.name}</h3>
              <p className="text-gray-400 text-base">{user.points} pontos</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
