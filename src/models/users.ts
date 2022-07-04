import { Model } from '.';
import { User } from '../types/login';
import { prisma } from './db/prismaClient'

class LoginModel {
  async getUserByEmail(email: { email: string }) {
    return await prisma.user.findFirst<{}>({ where: email })
  }
  async create(email: string, password: string, role: string) {
    return await prisma.user.create({ data: { email, password, role } })
  }
}
export default LoginModel;