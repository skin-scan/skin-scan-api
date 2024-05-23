import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const DetectionStatus = {
  DIAGNOSED: 'DIAGNOSED',
  SAFE: 'SAFE',
} as const;
export type DetectionStatus =
  (typeof DetectionStatus)[keyof typeof DetectionStatus];
export type Detection = {
  id: Generated<string>;
  userId: string | null;
  status: DetectionStatus;
  diagnosis: string;
  assessment: string | null;
  bodyPart: string;
  createdAt: Generated<Timestamp>;
  createdBy: string;
  updatedAt: Generated<Timestamp>;
  updatedBy: string;
  deletedAt: Timestamp | null;
  deletedBy: string | null;
};
export type User = {
  id: Generated<string>;
  name: string;
  email: string;
  hashedPassword: string;
  profilePicture: string | null;
  createdAt: Generated<Timestamp>;
  createdBy: string;
  updatedAt: Generated<Timestamp>;
  updatedBy: string;
  deletedAt: Timestamp | null;
  deletedBy: string | null;
};
export type DB = {
  Detection: Detection;
  User: User;
};
