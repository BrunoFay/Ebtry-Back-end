import prisma from './db/prismaClient';

class LoginModel {
  static async getUserByEmail(email: { email: string }) {
    return prisma.user.findFirst({ where: email });
  }

  static async create(email: string, password: string, role: string) {
    return prisma.user.create({ data: { email, password, role } });
  }
}
export default LoginModel;
