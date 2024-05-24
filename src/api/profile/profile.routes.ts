import {
  authMiddleware,
  multerImageMiddleware,
  validationMiddleware,
} from '../../common/middlewares';
import { Router, Response } from 'express';
import { response } from '../../common/utils';
import profileService from './profile.service';
import { StatusCodes } from 'http-status-codes';
import { IAuthRequest } from '../../common/interfaces';
import { BadRequestException } from '../../common/exceptions';
import { UpdateProfileSchema } from './profile.validation';
import { UpdateProfileDto } from './profile.dto';

const router = Router();

router.get('/', authMiddleware, async (req: IAuthRequest, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new BadRequestException();
  }
  const result = await profileService.getById(user.id);

  return response(res, StatusCodes.OK, result);
});

router.put(
  '/',
  authMiddleware,
  multerImageMiddleware,
  validationMiddleware(UpdateProfileSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }
    const spec = req.body as UpdateProfileDto;
    const result = await profileService.updateById(user.id, spec);

    return response(res, StatusCodes.OK, result);
  },
);

export default router;
