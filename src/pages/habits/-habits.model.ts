export const useHabitsModel = () => {
  const habits = [
    { id: 1, name: 'Academia', done: false },
    { id: 2, name: 'Leitura', done: false },
    { id: 3, name: 'Meditação', done: false },
    { id: 4, name: 'Água', done: false },
    { id: 5, name: 'Sono', done: false },
    { id: 6, name: 'Alimentação saudável', done: false },
    { id: 7, name: 'Organização', done: false }
  ];

  return { habits };
};
