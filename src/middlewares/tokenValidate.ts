import { RequestHandler } from 'express';

export default class TokenValidates {
  tokenValidate: RequestHandler = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json('Invalid token');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
