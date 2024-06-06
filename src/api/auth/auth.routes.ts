import authService from './auth.service';
import { response } from '../../common/utils';
import { StatusCodes } from 'http-status-codes';
import { Router, Response, Request } from 'express';
import { IAuthRequest } from '../../common/interfaces';
import { BadRequestException } from '../../common/exceptions';
import { LoginDto, RegisterDto, ResetPasswordDto } from './auth.dto';
import { authMiddleware, validationMiddleware } from '../../common/middlewares';
import {
  LoginSchema,
  RegisterSchema,
  ResetPasswordSchema,
} from './auth.validation';

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

router.patch(
  '/reset-password',
  authMiddleware,
  validationMiddleware(ResetPasswordSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }

    const spec = req.body as ResetPasswordDto;
    spec.email = user.email;

    const result = await authService.resetPassword(spec);

    return response(res, StatusCodes.OK, result);
  },
);

export default router;
