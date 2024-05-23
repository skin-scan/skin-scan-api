import { User } from '../../../prisma/generated/types';

export type RegisterDto = Omit<
  User,
  | 'id'
  | 'profilePicture'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'deletedBy'
> & {
  name: string;
  email: string;
  password: string;
  hashedPassword: string;
  createdBy: string;
  updatedBy: string;
};

export type LoginDto = {
  email: string;
  password: string;
};
