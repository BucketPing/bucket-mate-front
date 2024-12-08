import { getBucketDetail } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useGetBucketDetail = (bucketId: number) => {
  return useQuery({
    queryKey: ['bucketDetail', bucketId],
    queryFn: () =>
      getBucketDetail(bucketId).then((res) => {
        return res;
      }),
  });
};
