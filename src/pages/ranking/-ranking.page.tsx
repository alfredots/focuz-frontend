import { makeGetRankingService } from '@/infra/services/get-ranking.service';
import { useRankingModel } from '@/pages/ranking/-ranking.model';
import { RankingView } from '@/pages/ranking/-ranking.view';
import { useMemo } from 'react';

export const RankingPage = () => {
  const getRankingService = useMemo(() => makeGetRankingService(), []);
  const methods = useRankingModel({ getRanking: getRankingService });

  return <RankingView {...methods} />;
};
