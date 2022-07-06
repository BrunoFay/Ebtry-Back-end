import { RequestHandler } from 'express';
import Joi from 'joi';

class TasksValidate {
  protected newTaskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string(),
    priority: Joi.string().valid('low', 'medium', 'high').required(),
    status: Joi.string()
      .valid('toDo', 'inProgress', 'done', 'review', 'tests', 'paused').required(),
    members: Joi.array(),
    createdBy: Joi.string(),
    createdAt: Joi.date().required(),
  });

  protected updateTaskSchema = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string(),
    priority: Joi.string().valid('low', 'medium', 'high'),
    status: Joi.string()
      .valid('toDo', 'inProgress', 'done', 'review', 'tests', 'paused'),
    members: Joi.array(),
    createdBy: Joi.string(),
    createdAt: Joi.date(),
  });

  public fieldCreateValidate: RequestHandler = async (req, res, next) => {
    const { error } = this.newTaskSchema.validate(req.body);
    if (error?.message) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };

  public fieldUpdateValidate: RequestHandler = async (req, res, next) => {
    const { error } = this.updateTaskSchema.validate(req.body);
    if (error?.message) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };
}
export default TasksValidate;
