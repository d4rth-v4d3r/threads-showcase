import { z } from 'zod';

export const User = z
  .object({
    id: z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    photo: z.string(),
  })
  .strict();

export type User = z.infer<typeof User>;

export const UserWithSocial = User.extend({
  subscribers: z.number().int().nonnegative(), // TODO: This should be a robust collection
  flashcards: z.number().int().nonnegative(), // TODO: This should be a robust collection
}).strict();

export type UserWithSocial = z.infer<typeof UserWithSocial>;
