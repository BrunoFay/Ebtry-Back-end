interface Model<T> {
  getAll: () => Promise<T[]>
  getById: (id: string) => Promise<T | any>
  update: (id: string, payload: Partial<T>) => Promise<void>;
  remove: (id: string) => Promise<void>;
  create: (payload: T) => Promise<T | any>
}
export default Model;
