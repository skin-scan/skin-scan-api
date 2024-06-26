import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  constructor(message?: any) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
