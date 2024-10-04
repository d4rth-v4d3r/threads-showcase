import { Article, User } from '@threads/core';
import { Comment } from '../components/comment/comment';
import { Content } from '../components/content/content';
import { ContentHeader } from '../components/content/content-header';
import { ContentTabs } from '../components/content/content-tabs';
import {
  CalendarIcon,
  FlashCardsIcon,
  LaterIcon,
  NotesIcon,
  SpacesIcon,
} from '../components/icon';
import { MenuBar } from '../components/menubar/menubar';
import { Sidebar } from '../components/sidebar/sidebar';
import { SidebarItems } from '../components/sidebar/sidebar-items';
import { SidebarSearch } from '../components/sidebar/sidebar-search';
import { SidebarTabs } from '../components/sidebar/sidebar-tabs';
import { SidebarTree } from '../components/sidebar/sidebar-tree';
import { SidebarUserMenu } from '../components/sidebar/sidebar-user-menu';
import { config } from '../config/env';

export default async function Index() {
  const response = await fetch(
    `${config.API_URL}/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef`,
  );

  if (!response.ok) return <div>Failed to fetch data</div>;

  const article = (await response.json()) as Article;
  const user: User = {
    photo: '/images/current-user.jpeg',
    firstName: 'Drew',
    lastName: 'Koski',
    id: '7ef424f6-0759-40c9-a713-d06f0a466905',
  };

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
          <ContentHeader article={article} />
          <ContentTabs />
          <Comment comment={article.comments[0]} user={user} />
        </Content>
        <MenuBar>
          <NotesIcon className="[&_path_]:fill-grey-40 size-8" />
          <CalendarIcon className="[&_path_]:fill-grey-40 size-8" />
          <FlashCardsIcon className="[&_path_]:fill-grey-40 size-8" />
          <SpacesIcon className="[&_path_]:fill-grey-40 size-8" />
          <LaterIcon className="[&_path_]:fill-grey-40 size-8" />
        </MenuBar>
      </main>
    </div>
  );
}
