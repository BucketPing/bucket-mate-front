import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '@/pages/home/Home.tsx';
import Search from '@/pages/search/Search.tsx';
import BucketDetail from '@/pages/bucketDetail/BucketDetail.tsx';
import Layout from './Layout.tsx';
import MyPage from './pages/myPage/MyPage.tsx';
import './index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/bucket/:id',
        element: <BucketDetail />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
