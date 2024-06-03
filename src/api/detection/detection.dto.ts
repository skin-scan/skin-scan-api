import { SortOrder } from '../../common/enums';
import { Detection, DetectionStatus } from '../../../prisma/generated/types';

export type CreateDetectionDto = Omit<
  Detection,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'deletedBy'
> & {
  userId: string;
  name: string;
  assessment: string;
  file: Express.Multer.File;
  createdBy: string;
  updatedBy: string;
};

export type GetAllDetectionDto = {
  q: string;
  page: number;
  limit: number;
  order: SortOrder;
  userId: string;
  status?: DetectionStatus;
};

export type DeleteDetectionDto = {
  id: string;
  userId: string;
  requestedBy: string;
};

export type GetDetectionDto = {
  id: string;
  userId: string;
};

export type SkinConditionDto = {
  name: string;
  assessment: string;
};
