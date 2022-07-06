export interface Service<T> {
  create(payload: T): Promise<void>
  getAll(): Promise<T[]>
  getById(id: string): Promise<T>
  update(id: string, payload: Partial<T>): Promise<void>;
  remove(id: string): Promise<void>;
}
