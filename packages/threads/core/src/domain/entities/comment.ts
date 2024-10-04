import { z } from 'zod';
import { CommentBadge } from './comment-badge';
import { CommentReaction } from './comment-reaction';
import { CommentType } from './comment-type';
import { Media } from './media';
import { User } from './user';

export const BaseComment = z
  .object({
    id: z.string(),
    author: User,
    body: z.string(),
    date: z.string(), // TODO: Use z.date() instead
    media: Media.optional(),
    title: z.string().optional(),
    reactions: CommentReaction.array(),
    type: CommentType,
    note: z.string().optional(),
    badge: CommentBadge.optional(),
  })
  .strict();

export type Comment = z.infer<typeof BaseComment> & {
  comments: Comment[];
  replies: Comment[];
};

export const Comment: z.ZodType<Comment> = BaseComment.extend({
  comments: z.lazy(() => Comment.array()),
  replies: z.lazy(() => Comment.array()),
}).strict();
