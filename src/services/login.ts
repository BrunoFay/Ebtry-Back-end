import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../types/login';
import { LoginInfos, LoginModel } from '../types/login';
import { createToken, validateToken } from '../helpers/tokenFunctions';

class LoginService {
  loginModel: LoginModel;
  private token: string;
  private isTokenValid: string | JwtPayload;
  constructor(loginModel: LoginModel) {
    this.loginModel = loginModel;
  }

  async getUserByEmail(email: string) {
    const user = await this.loginModel
      .findOne({ where: { email }, raw: true }) as User;
    return user;
  }

  async singIn(email: string, password: string) {
    const loginInfos: LoginInfos = { email };
    const userResult = await this.getUserByEmail(email);
    if (!userResult) return { errorStatus: 401, message: 'Incorrect email or password' };
    const validatePassword = await bcrypt.compare(password, userResult.password!);
    if (!validatePassword) return { errorStatus: 401, message: 'Incorrect email or password' };
    this.createToken(loginInfos);
    return { token: this.token };
  }

  createToken(data: LoginInfos) {
    this.token = createToken(data);
  }

  validateToken(token: string) {
    this.isTokenValid = validateToken(token);
    return this.isTokenValid;
  }

}
export default LoginService;