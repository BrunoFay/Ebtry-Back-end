import { JwtPayload } from 'jsonwebtoken';

export type User = {
  email: string;
  password: string;
};

export type UserTypes = {
  id: string;
  email: string;
  role: string;
  password: string;
  createdAt: Date;
};
export type LoginResponse = {
  token: string;
  role: string;
};

export type LoginServiceType = {
  singIn: (email: string, password: string) => Promise<LoginResponse>;
  singUp: (user: User & { role: string }) => Promise<User | any>;
  validateToken: (token: string) => string | JwtPayload;
  getUserByEmail: (email: string) => Promise<User>;
};
export type LoginModelType = {
  getUserByEmail: (options: { email: string }) => Promise<UserTypes>;
  create: (email: string, password: string, role: string) => Promise<UserTypes>
};
