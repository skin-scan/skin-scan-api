import { JwtUtil } from '../utils';
import { IAuthRequest } from '../interfaces';
import { NextFunction, Response } from 'express';
import { UnauthorizedException } from '../exceptions';

export const authMiddleware = (
  req: IAuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new UnauthorizedException('Missing authorization header');
  }

  if (!authorization.startsWith('Bearer ')) {
    throw new UnauthorizedException('Token must start with Bearer');
  }

  const token = authorization?.split(' ')[1];
  if (!authorization) {
    throw new UnauthorizedException('Token is invalid');
  }

  const result = JwtUtil.verifyToken(token);
  req.user = result;

  next();
};
