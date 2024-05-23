import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class UnprocessableEntityException extends HttpException {
  constructor(message?: any) {
    super(StatusCodes.UNPROCESSABLE_ENTITY, message);
  }
}
