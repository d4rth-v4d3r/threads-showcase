import { z } from 'zod';

export const CommentType = z.enum([
  'flashcard',
  'comment',
  'reply',
  'article',
]);

export type CommentType = z.infer<typeof CommentType>;
