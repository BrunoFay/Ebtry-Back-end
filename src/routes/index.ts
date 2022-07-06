import { Router } from 'express';
import loginRoutes from './login';
import tasksRoutes from './tasks';

const routes = Router();

routes.use(loginRoutes);
routes.use(tasksRoutes);
export default routes;
