import { getUserList } from '@/api/home';
import { useQuery } from '@tanstack/react-query';

export const useGetUserList = () => {
  return useQuery({
    queryKey: ['userList'],
    queryFn: () =>
      getUserList().then((res) => {
        return res;
      }),
  });
};
