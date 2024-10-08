import { z } from 'zod';

export const ConfigSchema = z.object({
  ADAPTER: z.enum(['json', 'aws-dynamodb']),
  AWS_DYNAMODB_ENDPOINT: z.string().url().optional(),
  APP_ENV: z.enum(['local', 'prd']),
});

export type ConfigSchema = z.infer<typeof ConfigSchema>;

export const Config = ConfigSchema.parse({
  ADAPTER: process.env.ADAPTER,
  AWS_DYNAMODB_ENDPOINT: process.env.AWS_DYNAMODB_ENDPOINT,
  APP_ENV: process.env.APP_ENV,
});
