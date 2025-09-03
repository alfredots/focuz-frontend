import React from 'react';
import { Link } from '@tanstack/react-router';
import { Trophy, ListChecks } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const navItems = [
    { path: '/ranking', label: 'Ranking', icon: <Trophy size={20} /> },
    { path: '/', label: 'Hábitos', icon: <ListChecks size={20} /> }
    // { path: '/gerenciar', label: 'Gerenciar', icon: <Settings size={20} /> }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-stone-900 border-t border-red-900 flex justify-around py-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          activeProps={{
            className: 'flex flex-col items-center gap-1 text-sm text-red-500'
          }}
          inactiveProps={{
            className: 'flex flex-col items-center gap-1 text-sm text-gray-300 hover:text-red-400'
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
