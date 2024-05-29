import 'dotenv/config';
import { z } from 'zod';

const env = z
  .object({
    APP_PORT: z.coerce.number().min(1000).default(3000),
    APP_TOKEN: z.string(),
    DB_PORT: z.coerce.number().default(5400),
    DB_HOST: z.string().default('localhost'),
    DB_USERNAME: z.string().default('user'),
    DB_PASSWORD: z.string().default('12345678'),
    DB_DATABASE: z.string().default('skinscan'),
    DB_URL: z.string(),
    JWT_SECRET: z.string(),
    GCP_PROJECT_ID: z.string(),
    GCP_SERVICE_KEY: z.string(),
    GCP_BUCKET_NAME: z.string(),
  })
  .parse(process.env);

export const conf = {
  app: {
    port: env.APP_PORT,
    token: env.APP_TOKEN,
  },
  db: {
    port: env.DB_PORT,
    host: env.DB_HOST,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    url: env.DB_URL,
  },
  jwt: {
    secret: env.JWT_SECRET,
  },
  gcp: {
    projectId: env.GCP_PROJECT_ID,
    serviceKey: env.GCP_SERVICE_KEY,
    bucketName: env.GCP_BUCKET_NAME,
  },
};
