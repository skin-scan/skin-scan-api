import { Router, Response, Request } from 'express';
import { response } from '../../common/utils';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  return response(res, StatusCodes.OK, 'pong');
});

export default router;
