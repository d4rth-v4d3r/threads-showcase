import { User } from '@threads/core';
import { Avatar } from '../core/avatar';

export type CommentAuthorProps = User;

export function CommentAuthor({ firstName, lastName, photo }: User) {
  return (
    <span className="icon-layout text-content-secondary text-sm font-semibold">
      <Avatar src={photo} alt="user avatar" size={24} />
      {firstName} {lastName}
    </span>
  );
}
