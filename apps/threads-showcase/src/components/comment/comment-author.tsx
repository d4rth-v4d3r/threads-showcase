import { Avatar } from '../core/avatar';

export type CommentAuthorProps = React.PropsWithChildren<{
  src?: string;
}>;

export function CommentAuthor({
  children,
  src = '/images/user-1.jpeg',
}: CommentAuthorProps) {
  return (
    <span className="icon-layout text-sm font-semibold text-content-secondary">
      <Avatar src={src} alt="user avatar" size={24} />
      {children}
    </span>
  );
}
