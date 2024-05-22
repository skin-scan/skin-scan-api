import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { conf } from './common/conf';
import { API_PREFIX } from './common/constants';
import { errorMiddleware } from './common/middlewares/error.middleware';

import pingRoutes from './api/ping/ping.routes';

const app = express();
const router = express.Router();

app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
);

router.use('/ping', pingRoutes);

app.use(API_PREFIX, router);
app.use(errorMiddleware);
app.listen(conf.app.port, () => {
  console.log(`Server is running on port ${conf.app.port}`);
});
