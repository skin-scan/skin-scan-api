import {
  authMiddleware,
  multerImageMiddleware,
  validationMiddleware,
} from '../../common/middlewares';
import {
  CreateDetectionSchema,
  DeleteDetectionSchema,
  GetAllDetectionSchema,
  GetDetectionSchema,
} from './detection.validation';
import { Router, Response } from 'express';
import { response } from '../../common/utils';
import { StatusCodes } from 'http-status-codes';
import { IAuthRequest } from '../../common/interfaces';
import { BadRequestException } from '../../common/exceptions';
import detectionService from './detection.service';
import {
  CreateDetectionDto,
  GetAllDetectionDto,
  GetDetectionDto,
} from './detection.dto';

const router = Router();

router.post(
  '/',
  authMiddleware,
  multerImageMiddleware,
  validationMiddleware(CreateDetectionSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }
    const file = req.file;
    if (!file) {
      throw new BadRequestException('Image is required');
    }

    const spec = req.body as CreateDetectionDto;
    spec.createdBy = user.email;
    spec.updatedBy = user.email;
    spec.userId = user.id;
    spec.file = file;

    const result = await detectionService.create(spec);

    return response(res, StatusCodes.CREATED, result);
  },
);

router.get(
  '/',
  authMiddleware,
  validationMiddleware(GetAllDetectionSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }

    const { query } = GetAllDetectionSchema.parse(req);
    const spec = query as GetAllDetectionDto;
    spec.userId = user.id;

    const result = await detectionService.getAll(spec);

    return response(res, StatusCodes.OK, result);
  },
);

router.get(
  '/:id',
  authMiddleware,
  validationMiddleware(GetDetectionSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }

    const { params } = GetDetectionSchema.parse(req);
    const spec = params as GetDetectionDto;
    spec.userId = user.id;

    const result = await detectionService.getById(spec);

    return response(res, StatusCodes.OK, result);
  },
);

router.delete(
  '/:id',
  authMiddleware,
  validationMiddleware(DeleteDetectionSchema),
  async (req: IAuthRequest, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new BadRequestException();
    }
    return response(res, StatusCodes.OK, 'ok');
  },
);

export default router;
