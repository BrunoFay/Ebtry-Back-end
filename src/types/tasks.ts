export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: 'toDo' | 'inProgress' | 'done' | 'review' | 'tests' | 'paused';
  createdBy: string;
  priority: 'low' | 'medium' | 'high';
};
