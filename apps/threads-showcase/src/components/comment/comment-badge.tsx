import { CommentBadge as CommentBadgeType } from '@threads/core';

export type CommentBadgeProps = CommentBadgeType;

export function CommentBadge({
  icon,
  message,
  date,
}: CommentBadgeProps) {
  return (
    <div className="icon-layout text-content-secondary text-sm font-semibold">
      {icon && <span className="text-xl">{icon}</span>}
      {message && <span>{message}</span>}
      {date && (
        <span className="text-content-tertiary text-xs">• {date}</span>
      )}
    </div>
  );
}
