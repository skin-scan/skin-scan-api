import { Response } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

class ResponseWrapper {
  public message: string;

  constructor(public status: StatusCodes, public data: any, message?: string) {
    this.message = message || getReasonPhrase(status);
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
    };
  }
}

export const response = (
  res: Response,
  status: StatusCodes,
  data: any,
  message?: string,
) => {
  return res.status(status).json(new ResponseWrapper(status, data, message));
};
