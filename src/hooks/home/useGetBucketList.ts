import { getBucketHotList } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useGetHotBucketList = () => {
  return useQuery({
    queryKey: ['bucketList'],
    queryFn: () =>
      getBucketHotList().then((res) => {
        return res;
      }),
  });
};
