import { z } from 'zod';

const ConfigSchema = z.object({
  API_URL: z.string(),
});

export const config = ConfigSchema.parse({
  API_URL: process.env.API_URL,
});
