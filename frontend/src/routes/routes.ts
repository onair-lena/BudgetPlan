import { Dashboard } from '../pages/dashboard/dashboard';
import { Login } from '../pages/login/login';
import { DASHBOARD, LOGIN } from './route-const';

export const privateRoutes = [
  {
    path: DASHBOARD,
    Component: Dashboard,
  },
];

export const publicRoutes = [
  {
    path: LOGIN,
    Component: Login,
  },
];
