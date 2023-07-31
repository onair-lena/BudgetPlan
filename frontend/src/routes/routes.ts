import { Dashboard } from '../pages/dashboard/dashboard';
import { Auth } from '../pages/login/auth';
import { DASHBOARD, LOGIN, REGISTRATION } from './route-const';

export const privateRoutes = [
  {
    path: DASHBOARD,
    Component: Dashboard,
  },
];

export const publicRoutes = [
  {
    path: LOGIN,
    Component: Auth,
  },
  {
    path: REGISTRATION,
    Component: Auth,
  },
];
