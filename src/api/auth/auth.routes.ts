import { Router, Response, Request } from 'express';
import { response } from '../../common/utils';
import { StatusCodes } from 'http-status-codes';
import { validationMiddleware } from '../../common/middlewares';
import { LoginSchema, RegisterSchema } from './auth.validation';
import { LoginDto, RegisterDto } from './auth.dto';
import authService from './auth.service';

const router = Router();

router.post(
  '/register',
  validationMiddleware(RegisterSchema),
  async (req: Request, res: Response) => {
    const spec = req.body as RegisterDto;
    const result = await authService.register(spec);

    return response(res, StatusCodes.CREATED, result);
  },
);

router.post(
  '/login',
  validationMiddleware(LoginSchema),
  async (req: Request, res: Response) => {
    const spec = req.body as LoginDto;
    const result = await authService.login(spec);

    return response(res, StatusCodes.OK, result);
  },
);

export default router;
