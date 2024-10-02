import clsx from 'clsx';

export default function Index() {
  return (
    <div className="cover-layout f">
      <nav className="cover-layout__header">Simple header</nav>
      <main className={clsx('cover-layout__main', 'container-layout')}>
        <div className="sidebar-layout">Hey hey hey</div>
      </main>
      <footer className="cover-layout__footer">Simple footer</footer>
    </div>
  );
}
