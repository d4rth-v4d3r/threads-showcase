import clsx from 'clsx';

export function Sidebar({
  children,
  className,
}: React.ComponentProps<'aside'>) {
  return (
    <aside
      className={clsx(
        'sidebar-layout__bar w-[280px] border-r border-r-grey-15 bg-background-sidebar p-3',
        className,
      )}
    >
      <div className="stack-layout gap-3">{children}</div>
    </aside>
  );
}
