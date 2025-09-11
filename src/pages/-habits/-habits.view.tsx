import { Habit } from '@/components/habit';
import { ConfirmationModal } from '@/components/confirmation-modal';
import { useHabitsModel } from '@/pages/-habits/-habits.model';

export const HabitsView = (props: ReturnType<typeof useHabitsModel>) => {
  const { tasksState, handleRegister, handleToggle, isLoading, showModal, setShowModal } = props;

  return (
    <div className="w-full h-svh p-4 mt-16">
      <h1 className="text-white text-3xl text-center pt-8">Seus hábitos</h1>
      <div className="flex flex-col gap-6 p-6 max-w-md mx-auto text-center">
        <p className="text-gray-300 text-base">
          Marque cada hábito quando completá-lo no dia. Cada hábito concluído vale 1 ponto, e ao completar os 7 você fecha sua meta diária de 7
          pontos.
        </p>

        <div className="flex flex-col gap-4">
          {isLoading ? (
            <span className="text-white text-xl mt-8">Carregando...</span>
          ) : (
            tasksState.map((task) => <Habit key={task.id + task.name} name={task.name} done={task.done} onToggle={() => handleToggle(task.id)} />)
          )}
        </div>
        <button onClick={() => setShowModal(true)} className="mt-8 px-6 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700">
          Registrar
        </button>
        <ConfirmationModal
          open={showModal}
          text="Tem certeza que deseja registrar os hábitos marcados?"
          onConfirm={handleRegister}
          onCancel={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};
