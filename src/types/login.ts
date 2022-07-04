import { JwtPayload } from "jsonwebtoken";

export type User = {
  email: string;
  password: string;
}

export type UserTypes = {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
}


export type LoginServiceType = {
  singIn: (email: string, password: string) => Promise<User | any>;
  singUp: (user: User & { role: string }) => Promise<User | any>;
  validateToken: (token: string) => string | JwtPayload;
  getUserByEmail: (email: string) => Promise<User>;
};
export type LoginModelType = {
  getUserByEmail: (options: any) => Promise<User>;
  create: (email: string, password: string, role: string) => Promise<User | any>
}