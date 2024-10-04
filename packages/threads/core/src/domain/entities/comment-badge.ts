import { z } from 'zod';

export const CommentBadge = z
  .object({
    date: z.string(),
    icon: z.string(),
    message: z.string(),
  })
  .strict();

export type CommentBadge = z.infer<typeof CommentBadge>;
