export function MenuBar({ children }: React.PropsWithChildren) {
  return (
    <div className="cluster-layout--evenly fixed bottom-0 h-12 w-full bg-background-secondary md:hidden">
      {children}
    </div>
  );
}
