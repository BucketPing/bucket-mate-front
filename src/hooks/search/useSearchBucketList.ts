import { searchBucketList } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useSearchBucketList = (keyword: string) => {
  return useQuery({
    queryKey: ['bucketSearch', keyword],
    queryFn: () =>
      searchBucketList(keyword).then((res) => {
        return res;
      }),
  });
};
