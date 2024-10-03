export function Content({ children }: React.ComponentProps<'main'>) {
  return (
    <article className="stack-layout sidebar-layout__content">
      {children}
    </article>
  );
}
