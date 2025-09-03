import { useRankingModel } from '@/pages/ranking/-ranking.model';
import { RankingView } from '@/pages/ranking/-ranking.view';

export const RankingPage = () => {
  const methods = useRankingModel();

  return <RankingView {...methods} />;
};
