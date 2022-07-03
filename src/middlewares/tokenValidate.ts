import { RequestHandler } from 'express';
import { validateToken } from '../helpers/tokenFunctions';
import LoginService from '../services/login';
import { LoginInfos, LoginServiceType as LoginServiceType } from '../types/login';


export default class TokenValidates {
  tokenValidate: RequestHandler = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json('Invalid token');
      }
 /*      const isValidToken = validateToken(authorization);
      const { email } = isValidToken as LoginInfos;
      const isUser = await this.service.getUserByEmail(email);
      if (!isUser) return res.status(401).json({ message: 'Invalid token' }); */
      next();
    } catch (error) {
      next(error);
    }
  }
}