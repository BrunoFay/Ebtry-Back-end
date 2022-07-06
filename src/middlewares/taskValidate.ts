import { RequestHandler } from 'express';
import Joi from 'joi';

class TasksValidate {
  protected productSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string(),
    priority: Joi.string().valid('low', 'medium', 'high').required(),
    status: Joi.string()
      .valid('toDo', 'inProgress', 'done', 'review', 'tests', 'paused').required(),
    members: Joi.array(),
    createdBy: Joi.string(),
    createdAt: Joi.date().required(),
  });

  public fieldValidate: RequestHandler = async (req, res, next) => {
    const { error } = this.productSchema.validate(req.body);
    if (error?.message === '"name" is required' || error?.message === '"amount" is required') {
      return res.status(400).json({ message: error.message });
    }
    next();
  };
}
export default TasksValidate;
