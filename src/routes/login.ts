import { Router } from 'express';
import LoginService from '../services/login';
import LoginController from '../controllers/login';
import LoginMiddleware from '../middlewares/loginValidate';
import LoginModel from '../models/users';
import { LoginModelType } from '../types/login';

const LoginRouter = Router();
const Model = new LoginModel() as LoginModelType;
const Service = new LoginService(Model);
const Controller = new LoginController(Service);
const Middleware = new LoginMiddleware();

LoginRouter.post(
  '/login',
  Middleware.validateLogin,
  Controller.login,
);
LoginRouter.post(
  '/register',
  Middleware.validateRegister,
  Controller.register,
);
LoginRouter.get('/login/validate', Controller.loginValidate);

export default LoginRouter;
