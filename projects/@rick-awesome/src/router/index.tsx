import ErrorPage from '@/components/error-page';
import Home from '@/layout';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
import { DemoRoutes } from './demo';
import { ProjectRoutes } from './project';
import { RickRoutes } from './rick';
// import { ProjectRoutes } from './project';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Home />,
    children: [DemoRoutes, RickRoutes, ProjectRoutes],
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    loader() {
      return redirect(import.meta.env.BASE_URL);
    },
  },
];

export const router = createBrowserRouter(routes);
