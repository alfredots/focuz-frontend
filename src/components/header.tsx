import React from 'react';

type HeaderProps = {
  user: { name: string };
  onLogout: () => void;
};

function InitialAvatar({ name }: { name: string }) {
  const initial = (name?.trim()?.[0] ?? '?').toUpperCase();
  return <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-semibold">{initial}</div>;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <div className="w-full p-4 border-b border-red-800 flex items-center justify-between bg-stone-900">
      {/* Título centralizado */}
      <h1 className="text-white text-2xl font-bold text-center flex-1">Focuz App</h1>

      {/* Avatar + botão de logout */}
      <div className="flex items-center gap-3">
        <InitialAvatar name={user.name} />
        <button onClick={onLogout} className="px-3 py-1 rounded-md bg-red-700 hover:bg-red-800 text-white text-sm">
          Sair
        </button>
      </div>
    </div>
  );
};
