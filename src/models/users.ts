import prisma from './db/prismaClient';

class LoginModel {
  getUserByEmail = async (email: { email: string }) => prisma.user.findFirst({ where: email });

  create = async (
    email: string,
    password: string,
    role: string,
  ) =>

    prisma.user.create({ data: { email, password, role } });
}

export default LoginModel;
