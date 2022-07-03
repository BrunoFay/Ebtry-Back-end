import { Service } from ".";
import { Task } from "../types/tasks";


class TasksService implements Service<Task> {
  model: any;
  constructor(Model: any) {
    this.model = Model;
  }

  async getAll() {

  }

  async create(match: Task) {

  }


  async update(id: string, taskToUpdate: Partial<Task>) {

  }
  async delete(id: string) {

  }
}
export default TasksService;