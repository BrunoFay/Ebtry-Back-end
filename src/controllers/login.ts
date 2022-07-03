import { RequestHandler } from 'express';
import { LoginServiceType } from '../types/login';

class LoginController {
  private service: LoginServiceType;
  constructor(LService: LoginServiceType) {
    this.service = LService;
  }

  login: RequestHandler = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const isValidUser = await this.service.singIn(email, password);
      if (isValidUser.errorStatus) {
        return res.status(isValidUser.errorStatus).json({ message: isValidUser.message });
      }
      return res.status(200).json(isValidUser);
    } catch (error) {
      next(error);
    }
  };

  loginValidate: RequestHandler = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json('Invalid token');
      }
      const isValidToken = this.service.validateToken(authorization);
      const { email } = isValidToken as { email: string };
      return res.status(200).json({ email });
    } catch (error) {
      next(error);
    }
  };
  register: RequestHandler = async (req, res, next) => {
    try {
      const newUser = await this.service.singUp(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  };
}
export default LoginController;