import { CommentBadge as CommentBadgeType } from '@threads/core';

export type CommentBadgeProps = CommentBadgeType;

export function CommentBadge({
  icon,
  message,
  date,
}: CommentBadgeProps) {
  return (
    <div className="icon-layout text-sm font-semibold text-content-secondary">
      {icon && <span className="text-xl">{icon}</span>}
      {message && <span>{message}</span>}
      {date && (
        <span className="text-xs text-content-tertiary">• {date}</span>
      )}
    </div>
  );
}
