import { Router } from 'express';
/* import Users from '../database/models/Users'; */
import LoginService from '../services/login';
import LoginController from '../controllers/login';
import LoginMiddleware from '../middlewares/loginValidate';
import { LoginModel } from '../types/login';

const LoginRouter = Router();
/* const Model = Users as LoginModel; */
const Service = new LoginService(Model);
const Controller = new LoginController(Service);
const Middleware = new LoginMiddleware();

LoginRouter.post(
  '/login',
  Middleware.validateLogin,
  Controller.login,
);
LoginRouter.get('/login/validate', Controller.loginValidate);

export default LoginRouter;