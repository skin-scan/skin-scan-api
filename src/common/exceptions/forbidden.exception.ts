import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class ForbiddenException extends HttpException {
  constructor(message?: any) {
    super(StatusCodes.FORBIDDEN, message);
  }
}
