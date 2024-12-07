import Home from '@/pages/home/Home.tsx';
import Search from '@/pages/search/Search.tsx';
import BucketDetail from '@/pages/bucketDetail/BucketDetail.tsx';
import BucketCreate from './pages/bucketCreate/BucketCreate.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout.tsx';

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
        path: '/create',
        element: <BucketCreate />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
