import { RequestHandler } from 'express';
import Joi from 'joi';

export default class LoginValidates {
  protected loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  protected registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid('admin', 'user').required(),
  });

  public validateLogin: RequestHandler = async (req, res, next) => {
    const { error } = this.loginSchema.validate(req.body);
    const errorMessage = error?.message;
    if (errorMessage?.endsWith('required')) {
      return res.status(400).json({ message: error?.message });
    }
    next();
  };

  public validateRegister: RequestHandler = async (req, res, next) => {
    const { error } = this.registerSchema.validate(req.body);
    const errorMessage = error?.message;
    if (errorMessage?.endsWith('required')) {
      return res.status(400).json({ message: error?.message });
    }
    next();
  };
}
