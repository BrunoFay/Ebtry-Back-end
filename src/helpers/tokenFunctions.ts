import * as fs from 'fs';
import * as JWT from 'jsonwebtoken';

const createToken = (data: { email: string }) => {
  const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');
  const token = JWT.sign(data, secret, { expiresIn: '7d' });
  return token;
};
const validateToken = (token: string) => {
  const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');
  return JWT.verify(token, secret);
};
export { createToken, validateToken };