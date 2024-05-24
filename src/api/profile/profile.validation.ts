import { z } from 'zod';

export const UpdateProfileSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name field is required',
      })
      .min(3)
      .max(100),
    email: z
      .string({
        required_error: 'Email field is required',
      })
      .email('Email not valid'),
  }),
});
