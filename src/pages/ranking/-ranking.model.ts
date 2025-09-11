import { Ranking } from '@/contracts/ranking.entity';
import { UseCase } from '@/contracts/user-case';
import { useQuery } from '@tanstack/react-query';

type UseRankingModelProps = {
  getRanking: UseCase<void, Promise<Ranking>>;
};

export const useRankingModel = ({ getRanking }: UseRankingModelProps) => {
  const { data, isLoading } = useQuery({ queryKey: ['ranking'], queryFn: () => getRanking.execute() });

  return { users: data || [], isLoading };
};
