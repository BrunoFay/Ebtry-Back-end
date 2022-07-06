import Model from '.';
import { Task } from '../types/tasks';
import prisma from './db/prismaClient';

class TaskModel implements Model<Task> {
  getAll = async () => await prisma.task.findMany() as Task[];

  create = async (payload: Task) => {
    const newTask = {
      title: payload.title,
      description: payload.description,
      status: payload.status,
      priority: payload.priority,
      createdAt: payload.createdAt,
      createdBy: payload.createdBy,
    };
    await prisma.task.create({ data: newTask });
  };

  update = async (id: string, payload: Partial<Task>) => {
    await prisma.task.update({ where: { id }, data: { ...payload } });
  };

  remove = async (id: string) => {
    await prisma.task.delete({ where: { id } });
  };

  getById = async (id: string) => prisma.task.findUnique({ where: { id } });
}
export default TaskModel;
