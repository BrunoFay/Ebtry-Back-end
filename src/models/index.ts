export interface Model<T> {
  route: string
  create(payload: T): Promise<void>
  getAll(): Promise<T[]>
  update(id: string, payload: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}