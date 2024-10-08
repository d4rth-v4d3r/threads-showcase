import { z } from 'zod';

export const ConfigSchema = z.object({
  ADAPTER: z.enum(['json', 'aws-dynamodb']),
  AWS_DYNAMODB_ENDPOINT: z.string().url().optional(),
});

export type ConfigSchema = z.infer<typeof ConfigSchema>;

export const Config = ConfigSchema.parse({
  ADAPTER: process.env.ADAPTER,
  AWS_DYNAMODB_ENDPOINT: process.env.AWS_DYNAMODB_ENDPOINT,
});
