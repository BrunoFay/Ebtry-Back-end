import { RequestHandler } from 'express';
import Joi from 'joi'

export default class LoginValidates {
  protected LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  public validateLogin: RequestHandler = async (req, res, next) => {
    const { error } = this.LoginSchema.validate(req.body);
    const errorMessage = error?.message;
    if (errorMessage?.endsWith('required')) {
      return res.status(400).json({ message: error?.message });
    }
    next();
  };
}