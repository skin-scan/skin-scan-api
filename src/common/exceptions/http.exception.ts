import { StatusCodes, getReasonPhrase, getStatusCode } from 'http-status-codes';

export class HttpException extends Error {
  status: StatusCodes;
  response: {
    status: number;
    error: string;
    message?: string;
  };

  constructor(status: StatusCodes, message?: string) {
    super();
    this.status = status;
    this.response = {
      status: 400,
      error: getReasonPhrase(status),
      message: message || 'No message available',
    };
  }
}
