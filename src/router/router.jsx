import { RootLayout } from '@components/layouts/RootLayout';
import { NotFoundPage } from '@pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <></>,
      },
      {
        path: 'profile/:id',
        lazy: async () => {
          let { ProfilePage: HomePage } = await import('@pages/ProfilePage');
          return { Component: HomePage };
        },
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
