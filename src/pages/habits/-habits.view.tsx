import { Habit } from '@/components/habit';
import { useHabitsModel } from '@/pages/habits/-habits.model';

export const HabitsView = (props: ReturnType<typeof useHabitsModel>) => {
  return (
    <div className="w-full p-4">
      <h1 className="text-white text-3xl text-center">Seus hábitos</h1>
      <div className="flex flex-col gap-6 p-6 max-w-md mx-auto text-center">
        <p className="text-gray-300 text-base">
          Marque cada hábito quando completá-lo no dia. Cada hábito concluído vale 1 ponto, e ao completar os 7 você fecha sua meta diária de 7
          pontos.
        </p>

        <div className="flex flex-col gap-4">
          {props.habits.map((habit) => (
            <Habit key={habit.name} id={habit.id} name={habit.name} done={habit.done} />
          ))}
        </div>
      </div>
    </div>
  );
};
