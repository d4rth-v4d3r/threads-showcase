import { z } from 'zod';

export const CommentReaction = z
  .object({
    type: z.string(),
    count: z.number().gt(0),
  })
  .strict();

export type CommentReaction = z.infer<typeof CommentReaction>;
