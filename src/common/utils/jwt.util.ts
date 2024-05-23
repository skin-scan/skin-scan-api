import { conf } from '../conf';
import { IJwtPayload } from '../interfaces';
import { sign, verify } from 'jsonwebtoken';
import { UnauthorizedException } from '../exceptions';

export class JwtUtil {
  static generateToken(payload: IJwtPayload) {
    return sign(payload, conf.jwt.secret, {
      header: {
        alg: 'HS256',
        typ: 'JWT',
      },
    });
  }

  static verifyToken(token: string) {
    try {
      return verify(token, conf.jwt.secret) as IJwtPayload;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
}
