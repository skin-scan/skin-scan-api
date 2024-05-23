import { Request } from 'express';
import { IJwtPayload } from './jwt.interface';

export interface IAuthRequest extends Request {
  user?: IJwtPayload;
}
