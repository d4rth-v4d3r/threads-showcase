import { Content } from '../components/content/content';
import { ContentHeader } from '../components/content/content-header';
import { Sidebar } from '../components/sidebar/sidebar';
import { SidebarItems } from '../components/sidebar/sidebar-items';
import { SidebarSearch } from '../components/sidebar/sidebar-search';
import { SidebarTabs } from '../components/sidebar/sidebar-tabs';
import { SidebarTree } from '../components/sidebar/sidebar-tree';
import { SidebarUserMenu } from '../components/sidebar/sidebar-user-menu';

export default function Index() {
  return (
    <div className="cover-layout bg-background-body">
      <main className="cover-layout__main container-layout sidebar-layout">
        <Sidebar>
          <SidebarUserMenu />
          <SidebarSearch />
          <SidebarItems />
          <SidebarTabs />
          <SidebarTree />
        </Sidebar>
        <Content>
          <ContentHeader />
        </Content>
      </main>
    </div>
  );
}
