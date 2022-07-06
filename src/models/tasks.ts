import Model from '.';
import { Task } from '../types/tasks';
import prisma from './db/prismaClient';

class TaskModel implements Model<Task> {
  static async getAll() {
    return await prisma.task.findMany() as Task[];
  }

  static async create(payload: Task) {
    const newTask = {
      title: payload.title,
      description: payload.description,
      status: payload.status,
      priority: payload.priority,
      createdAt: payload.createdAt,
      createdBy: payload.createdBy,
    };
    await prisma.task.create({ data: newTask });
  }

  static async update(id: string, payload: Partial<Task>) {
    await prisma.task.update({ where: { id }, data: { ...payload } });
  }

  static async delete(id: string) {
    await prisma.task.delete({ where: { id } });
  }

  static getById(id: string) {
    return prisma.task.findUnique({ where: { id } });
  }
}
export default TaskModel;
