import { Router } from 'express';
import TasksService from '../services/tasks';
import TasksController from '../controllers/tasks';
import TokenValidate from '../middlewares/tokenValidate';
import TasksValidate from '../middlewares/taskValidate';
import TasksModel from '../models/tasks';
import Model from '../models';
import { Task } from '../types/tasks';

const ModelT = new TasksModel() as Model<Task>;
const Service = new TasksService(ModelT);
const Controller = new TasksController(Service);
const matchsRouter = Router();
const MiddlewareToken = new TokenValidate();
const Middlewaretasks = new TasksValidate();
matchsRouter.get('/tasks', Controller.getAll);
matchsRouter.patch(
  '/tasks/:id',
  MiddlewareToken.tokenValidate,
  Middlewaretasks.fieldUpdateValidate,
  Controller.update,
);
matchsRouter.post(
  '/tasks',
  MiddlewareToken.tokenValidate,
  Middlewaretasks.fieldCreateValidate,
  Controller.create,
);
matchsRouter.delete(
  '/tasks/:id',
  Controller.delete,
);
export default matchsRouter;
