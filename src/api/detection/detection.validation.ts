import { z } from 'zod';
import { SortOrder } from '../../common/enums';
import { DetectionStatus } from '../../../prisma/generated/types';

export const CreateDetectionSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name field is required',
      })
      .min(3)
      .max(100),
  }),
});

export const GetAllDetectionSchema = z.object({
  query: z.object({
    q: z.string().optional(),
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(5).max(100).default(50),
    order: z.enum([SortOrder.ASC, SortOrder.DESC]).default(SortOrder.DESC),
    status: z
      .enum([DetectionStatus.SAFE, DetectionStatus.DIAGNOSED])
      .optional(),
  }),
});

export const GetDetectionSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: 'Id field is required',
      })
      .uuid({ message: 'Id field is required' }),
  }),
});

export const DeleteDetectionSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: 'Name field is required',
      })
      .uuid(),
  }),
});
