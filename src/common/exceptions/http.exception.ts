import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export class HttpException extends Error {
  status: StatusCodes;
  response: {
    status: number;
    error: string;
    message?: any;
  };

  constructor(status: StatusCodes, message?: any) {
    super();
    this.status = status;
    this.response = {
      status: status,
      error: getReasonPhrase(status),
      message: message || 'No message available',
    };
  }
}
