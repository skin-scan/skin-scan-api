import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class NotFounException extends HttpException {
  constructor(message?: any) {
    super(StatusCodes.NOT_FOUND, message);
  }
}
