export enum TaskStatus {
  TO_DO = 'toDo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
  REVIEW = 'review',
  TESTS = 'tests',
  Paused = 'paused',
}
export enum Priority{
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export type Task = {
  id:string;
  title: string;
  description: string;
  createdAt: Date;
  status: TaskStatus;
  members: string[];
  createdBy: string;
  priority:Priority;
}

export type TaskService ={
  getAll: () => Promise<Task[]>;
  getTaskById: (id:string) => Promise<Task>;
  create: (task: Task) => Promise<Task>;
  update: (id: string, task: Partial<Task>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}