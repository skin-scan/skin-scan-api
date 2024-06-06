import { z } from 'zod';

export const RegisterSchema = z.object({
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
    password: z
      .string({
        required_error: 'Password field is required',
      })
      .min(8)
      .max(100),
  }),
});

export const LoginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email field is required',
      })
      .email('Email not valid'),
    password: z
      .string({
        required_error: 'Password field is required',
      })
      .min(8)
      .max(100),
  }),
});

export const ResetPasswordSchema = z.object({
  body: z.object({
    oldPassword: z
      .string({
        required_error: 'Password field is required',
      })
      .min(8)
      .max(100),
    newPassword: z
      .string({
        required_error: 'Password field is required',
      })
      .min(8)
      .max(100),
  }),
});
