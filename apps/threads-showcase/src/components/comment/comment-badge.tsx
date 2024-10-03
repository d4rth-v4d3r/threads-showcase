export type CommentBadgeProps = React.PropsWithChildren<{
  icon?: React.ReactNode;
  updatedAt?: React.ReactNode;
}>;

export function CommentBadge({
  children,
  icon,
  updatedAt,
}: CommentBadgeProps) {
  return (
    <div className="icon-layout text-sm font-semibold text-content-secondary">
      {icon && <span className="text-xl">{icon}</span>}
      {children && <span>{children}</span>}
      {updatedAt && (
        <span className="text-xs text-content-tertiary">
          • {updatedAt}
        </span>
      )}
    </div>
  );
}
