import { Service } from '.';
import Model from '../models';
import { Task } from '../types/tasks';

class TasksService implements Service<Task> {
  private model: Model<Task>;
  constructor(model: Model<Task>) {
    this.model = model;
  }

  async getAll() {
    return this.model.getAll();
  }

  async create(match: Task) {
    await this.model.create(match);
  }

  async update(id: string, taskToUpdate: Partial<Task>) {
    await this.model.update(id, taskToUpdate);
  }

  async getById(id: string) {
    return this.model.getById(id);
  }

  async remove(id: string) {
    await this.model.remove(id);
  }
}
export default TasksService;
