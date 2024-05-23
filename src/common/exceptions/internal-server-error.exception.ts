import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class InternalServerErrorException extends HttpException {
  constructor(message?: any) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}
