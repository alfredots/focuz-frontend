import { RankingList } from '@/components/ranking-list';
import { useRankingModel } from '@/pages/ranking/-ranking.model';

export const RankingView = (props: ReturnType<typeof useRankingModel>) => {
  return (
    <div className="w-full p-4">
      <h1 className="text-white text-3xl text-center">Ranking de pontuação</h1>
      <RankingList users={props.users} />
    </div>
  );
};
