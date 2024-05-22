import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../exceptions';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(error.status);
  console.log(error.name);
  console.log(error.response);
  const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const response = error.response ?? {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    message: 'Something went wrong',
  };

  res.status(status).send(response);
};
