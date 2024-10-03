import { Sidebar } from '../components/sidebar/sidebar';
import { SidebarItems } from '../components/sidebar/sidebar-items';
import { SidebarSearch } from '../components/sidebar/sidebar-search';
import { SidebarUserMenu } from '../components/sidebar/sidebar-user-menu';

export default function Index() {
  return (
    <div className="cover-layout bg-background-body">
      <main className="cover-layout__main container-layout sidebar-layout">
        <Sidebar>
          <SidebarUserMenu />
          <SidebarSearch />
          <SidebarItems />
        </Sidebar>
        <article className="sidebar-layout__content">
          Hello, from API!
        </article>
      </main>
    </div>
  );
}
