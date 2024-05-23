import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import {
  BadRequestException,
  InternalServerErrorException,
} from '../exceptions';

const validationMiddleware =
  (schema: AnyZodObject) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException(
          error.issues.map((issue) => {
            return {
              type: issue.path[0],
              key: issue.path[1],
              detail: issue.message,
            };
          }),
        );
      } else {
        throw new InternalServerErrorException(error);
      }
    }
  };

export { validationMiddleware };
