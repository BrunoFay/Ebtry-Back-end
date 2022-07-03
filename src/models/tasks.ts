import { Model } from ".";
import { Task } from "../types/tasks";
import { prisma } from "./db/prismaClient";

class TaskModel implements Model<Task> {
  async getAll() {
    return await prisma.task.findMany() as Task[]
  }
  async create(payload: Task) {
    await prisma.task.create({ data: payload })
  }
  async update(id: string, payload: Partial<Task>) {
    await prisma.task.update({ where: { id }, data: { ...payload } })
  }
  async delete(id: string) {
    await prisma.task.delete({ where: { id } })
  }

  async getById(id: string) {
    return await prisma.task.findUnique({ where: { id } })
  }

}
export default TaskModel