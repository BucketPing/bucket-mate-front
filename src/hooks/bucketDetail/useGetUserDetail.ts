import { getUserDetail } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useGetUserDetail = (userId: number) => {
  return useQuery({
    queryKey: ['userDetail', userId],
    queryFn: () =>
      getUserDetail(userId).then((res) => {
        return res;
      }),
  });
};
