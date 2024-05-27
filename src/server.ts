import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { conf } from './common/conf';
import { API_PREFIX } from './common/constants';
import { errorMiddleware } from './common/middlewares/error.middleware';

import pingRoutes from './api/ping/ping.routes';
import authRoutes from './api/auth/auth.routes';
import profileRoutes from './api/profile/profile.routes';
import detectionRoutes from './api/detection/detection.routes';

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
);

router.use('/ping', pingRoutes);
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/detections', detectionRoutes);

app.use(API_PREFIX, router);
app.use(errorMiddleware);
app.listen(conf.app.port, () => {
  console.info(`Server is running on port ${conf.app.port}`);
});
