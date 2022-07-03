import { JwtPayload } from "jsonwebtoken";

export type User = {
  email: string;
  password: string;
}
export type LoginInfos = {
  email: string;
}
export type LoginService = {
  singIn: (email: string, password: string) => Promise<User|any>;
  validateToken: (token: string) => string | JwtPayload;
  getUserByEmail: (email: string) => Promise<User>;
};
export type LoginModel = {
  findOne: (options: any) => Promise<User>;
}