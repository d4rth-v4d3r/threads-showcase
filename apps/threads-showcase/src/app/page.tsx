import { Comment } from '../components/comment/comment';
import { CommentAuthor } from '../components/comment/comment-author';
import { CommentBadge } from '../components/comment/comment-badge';
import { CommentFlashCard } from '../components/comment/comment-flash-card';
import { CommentImage } from '../components/comment/comment-image';
import { CommentNote } from '../components/comment/comment-note';
import { CommentReactionsBar } from '../components/comment/comment-reactions-bar';
import { Content } from '../components/content/content';
import { ContentHeader } from '../components/content/content-header';
import { ContentTabs } from '../components/content/content-tabs';
import { Avatar } from '../components/core/avatar';
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
          <ContentTabs />
          <Comment
            activityType="published Flashcard"
            publishedAt="6 days ago"
            comments={[
              {
                activityType: 'published article',
                publishedAt: '1 week ago',
                author: <CommentAuthor>Michael Busch</CommentAuthor>,
                title: 'Cell Biology, Genetics and Evolution',
                body: (
                  <>
                    Dummy comment - But I must explain to you how all
                    this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a
                    complete account of the system, and expound the
                    actual teachings...
                  </>
                ),
                reactions: <CommentReactionsBar />,
                media: (
                  <CommentImage
                    src="/images/genetics.jpeg"
                    alt="genetics"
                  />
                ),
              },
              {
                activityType: 'commented on',
                publishedAt: '2 week ago',
                author: <CommentAuthor>Michael Busch</CommentAuthor>,
                body: (
                  <>
                    <CommentNote>
                      <b>2. Learn before you memorize</b> ↔ Do not try
                      to apply Spaced Repetition to a piece of content
                      until you have learned that content once
                    </CommentNote>
                    Dummy comment - But I must explain to you how all
                    this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a
                    complete account of the system, and expound the
                    actual teachings...
                  </>
                ),
                reactions: <CommentReactionsBar />,
              },
              {
                activityType: 'published article',
                publishedAt: '6 days ago',
                author: <CommentAuthor>Michael Busch</CommentAuthor>,
                title: 'Ecosystems and Communities',
                body: (
                  <>
                    Dummy comment - But I must explain to you how all
                    this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a
                    complete account of the system, and expound the
                    actual teachings...
                  </>
                ),
                showCommentBox: true,
                reactions: (
                  <CommentReactionsBar
                    reactions={[
                      {
                        type: '🔥',
                        count: 4,
                      },
                      {
                        type: '🎉',
                        count: 2,
                      },
                      {
                        type: '🤘🏼',
                        count: 1,
                      },
                    ]}
                    totalComments={3}
                  />
                ),
                media: <CommentFlashCard />,
                badge: (
                  <CommentBadge icon="🎉" updatedAt="1 week ago">
                    Newbie Alert
                  </CommentBadge>
                ),
                replies: [
                  {
                    activityType: (
                      <span>
                        replied to <b className="text-sm">Themselves</b>
                      </span>
                    ),
                    publishedAt: '6 days ago',
                    author: (
                      <CommentAuthor>Michael Busch</CommentAuthor>
                    ),
                    body: (
                      <>
                        Dummy comment - But I must explain to you how
                        all this mistaken idea of denouncing pleasure
                        and praising pain was born and I will give you a
                        complete account of the system, and expound the
                        actual teachings...
                      </>
                    ),
                    reactions: <CommentReactionsBar />,
                    replies: [
                      {
                        activityType: (
                          <span>
                            replied to{' '}
                            <b className="text-sm">Themselves</b>
                          </span>
                        ),
                        publishedAt: '6 days ago',
                        author: (
                          <CommentAuthor>Michael Busch</CommentAuthor>
                        ),
                        body: <>And I really meant it!</>,
                        reactions: <CommentReactionsBar />,
                        replies: [
                          {
                            activityType: (
                              <span>
                                replied to{' '}
                                <b className="text-sm">Themselves</b>
                              </span>
                            ),
                            publishedAt: '6 days ago',
                            author: (
                              <CommentAuthor>
                                Michael Busch
                              </CommentAuthor>
                            ),
                            body: <>Seriously!</>,
                            reactions: <CommentReactionsBar />,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
            media={<CommentFlashCard />}
            author={<CommentAuthor>Michael Busch</CommentAuthor>}
            reactions={
              <CommentReactionsBar
                showComments
                reactions={[
                  {
                    type: '🔥',
                    count: 4,
                  },
                  {
                    type: '🎉',
                    count: 2,
                  },
                  {
                    type: '🤘🏼',
                    count: 1,
                  },
                ]}
                comments={[
                  <Avatar
                    key="1"
                    src="/images/user-3.jpeg"
                    alt="user avatar"
                    size={24}
                  />,
                  <Avatar
                    key="2"
                    src="/images/user-2.jpeg"
                    alt="user avatar"
                    size={24}
                  />,
                ]}
              />
            }
            title="Ecosystems and Communities"
            body={
              <>
                Dummy comment - But I must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain
                was born and I will give you a complete account of the
                system, and expound the actual teachings...
              </>
            }
            user={
              <CommentAuthor src="/images/current-user.jpeg">
                Drew Koski
              </CommentAuthor>
            }
          />
        </Content>
        <MenuBar>
          <NotesIcon className="size-8 [&_path_]:fill-grey-40" />
          <CalendarIcon className="size-8 [&_path_]:fill-grey-40" />
          <FlashCardsIcon className="size-8 [&_path_]:fill-grey-40" />
          <SpacesIcon className="size-8 [&_path_]:fill-grey-40" />
          <LaterIcon className="size-8 [&_path_]:fill-grey-40" />
        </MenuBar>
      </main>
    </div>
  );
}
