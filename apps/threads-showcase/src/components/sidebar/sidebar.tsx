import clsx from 'clsx';

export function Sidebar({
  children,
  className,
}: React.ComponentProps<'aside'>) {
  return (
    <aside
      className={clsx(
        'sidebar-layout__bar hidden w-[280px] border-r border-r-grey-15 bg-background-sidebar py-3 md:block',
        className,
      )}
    >
      <div className="stack-layout gap-2 [&_>_*]:px-3">{children}</div>
    </aside>
  );
}
