import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import { createToken, validateToken } from '../helpers/tokenFunctions';
import { LoginModelType, User } from '../types/login';

class LoginService {
  loginModel: LoginModelType;
  private token: string = '';
  private isTokenValid: string | JwtPayload = '';
  constructor(loginModel: LoginModelType) {
    this.loginModel = loginModel;
  }

  async getUserByEmail(email: string) {
    const user = await this.loginModel.getUserByEmail({ email });
    return user;
  }

  async singIn(email: string, password: string) {
    const loginInfos = { email };
    const userResult = await this.getUserByEmail(email);
    if (!userResult) throw new Error('Incorrect email or password');
    const validatePassword = await bcrypt.compare(password, userResult.password!);
    if (!validatePassword) throw new Error("Password is incorrect")
    this.createToken(loginInfos);
    return { token: this.token };
  }

  async singUp(newUser: User & { role: string }) {
    const checkIfUserExist = await this.getUserByEmail(newUser.email);
    if (checkIfUserExist) throw new Error('User already exist');
    const passwordHash = await bcrypt.hash(newUser.password, 1)
    const createdUser = await this.loginModel.create(newUser.email, passwordHash, newUser.role);
    return { ...createdUser, password: undefined }
  }

  createToken(data: { email: string }) {
    this.token = createToken(data);
  }

  validateToken(token: string) {
    this.isTokenValid = validateToken(token);
    return this.isTokenValid;
  }

}
export default LoginService;