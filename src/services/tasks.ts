import { string } from "joi";
import { Service } from ".";
import { Model } from "../models";
import { Task } from "../types/tasks";


class TasksService implements Service<Task> {
  model: Model<Task>;
  constructor(Model: Model<Task>) {
    this.model = Model;
  }

  async getAll() {
    return await this.model.getAll()
  }

  async create(match: Task) {
    await this.model.create(match)
  }

  async update(id: string, taskToUpdate: Partial<Task>) {
    await this.model.update(id, taskToUpdate)
  }
  async getById(id: string) {
    return await this.model.getById(id)
  }
  async delete(id: string) {
    await this.model.delete(id)
  }
}
export default TasksService;