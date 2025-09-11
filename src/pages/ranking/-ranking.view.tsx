import { RankingList } from '@/components/ranking-list';
import { useRankingModel } from '@/pages/ranking/-ranking.model';

export const RankingView = (props: ReturnType<typeof useRankingModel>) => {
  return (
    <div className="w-full h-lvh mt-16 px-4 flex flex-col items-center">
      <h1 className="text-white text-3xl text-center pt-8">Ranking de pontuação</h1>
      {props.isLoading ? <span className="text-white text-xl mt-8">Carregando...</span> : <RankingList users={props.users} />}
    </div>
  );
};
