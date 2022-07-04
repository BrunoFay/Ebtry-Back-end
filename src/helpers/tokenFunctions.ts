import * as JWT from 'jsonwebtoken';

const createToken = (data: { email: string }) => {
  const secret = process.env.TOKEN_PASSWORD as string;
  const token = JWT.sign(data, secret);
  return token;
};
const validateToken = (token: string) => {
  const secret = process.env.TOKEN_PASSWORD as string
  return JWT.verify(token, secret);
};
export { createToken, validateToken };