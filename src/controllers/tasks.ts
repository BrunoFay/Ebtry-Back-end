import { RequestHandler } from 'express';
import { TaskService } from '../types/tasks';

class TasksController  {
  constructor(private taskService: TaskService = taskService) { }

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const tasks = await this.taskService.getAll();
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  };

  create: RequestHandler = async (req, res, next) => {
    try {
      const newMatch = await this.taskService.create(req.body);
      return res.status(201).json(newMatch);
    } catch (error) {
      next(error);
    }
  };

  update: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const isValidId = await this.taskService.getTaskById(id);
      if (!isValidId) return res.status(404).json({ error: 'Task not found' });
      await this.taskService.update(id, req.body);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const isValidId = await this.taskService.getTaskById(id);
      if (!isValidId) return res.status(404).json({ error: 'Task not found' });
      await this.taskService.delete(id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  };
}

export default TasksController;