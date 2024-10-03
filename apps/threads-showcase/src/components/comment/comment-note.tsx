export function CommentNote({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-block rounded-md border-l-4 border-l-grey-30 bg-grey-0 py-3 pl-4 pr-44 text-sm">
      {children}
    </span>
  );
}
