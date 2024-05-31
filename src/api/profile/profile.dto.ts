import { User } from '../../../prisma/generated/types';

export type UpdateProfileDto = Omit<
  User,
  | 'id'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'deletedAt'
  | 'deletedBy'
> & {
  name: string;
  email: string;
  file?: Express.Multer.File;
};
