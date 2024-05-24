import { User } from '../../../prisma/generated/types';

export type UpdateProfileDto = Omit<
  User,
  | 'id'
  | 'profilePicture'
  | 'createdAt'
  | 'createdBy'
  | 'updatedAt'
  | 'updatedBy'
  | 'deletedAt'
  | 'deletedBy'
> & {
  name: string;
  email: string;
};
