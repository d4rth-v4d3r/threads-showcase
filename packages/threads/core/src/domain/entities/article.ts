import { z } from 'zod';
import { Comment } from './comment';
import { UserWithSocial } from './user';

export const Article = z
  .object({
    id: z.string().uuid(),
    authors: UserWithSocial.array(),
    comments: Comment.array(),
    title: z.string(),
    thumbnail: z.string(),
  })
  .strict();

export type Article = z.infer<typeof Article>;
