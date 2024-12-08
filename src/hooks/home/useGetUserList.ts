import { getUserInfo } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  return useQuery({
    queryKey: ['userList'],
    queryFn: () =>
      getUserInfo().then((res) => {
        return res;
      }),
  });
};
