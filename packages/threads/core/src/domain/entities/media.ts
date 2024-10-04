import { z } from 'zod';

export const Media = z
  .object({
    src: z.string(),
    alt: z.string(),
  })
  .strict();
