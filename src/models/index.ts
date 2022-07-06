interface Model<T> {
  getAll(): Promise<T[]>
  getById(id: string): Promise<T | any>
  update(id: string, payload: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
  create(payload: T): Promise<void>
}
export default Model;
