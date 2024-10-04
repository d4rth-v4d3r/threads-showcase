import {
  Article,
  ArticleRepository,
  NotFoundError,
} from '@threads/core';

export function articleJsonAdapter(): ArticleRepository {
  return {
    getArticleById: (id) => {
      if (id !== '1ee0920a-5b5e-4605-a8bd-27de171e3cef') {
        throw new NotFoundError('Article not found');
      }

      const article: Article = {
        thumbnail: '/images/genetics.jpeg',
        authors: [
          {
            id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
            firstName: 'Michael',
            lastName: 'Busch',
            flashcards: 143,
            subscribers: 48,
            photo: '/images/user-1.jpeg',
          },
        ],
        comments: [
          {
            author: {
              id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
              firstName: 'Michael',
              lastName: 'Busch',
              photo: '/images/user-1.jpeg',
            },
            body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
            comments: [
              {
                author: {
                  id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                  firstName: 'Michael',
                  lastName: 'Busch',
                  photo: '/images/user-1.jpeg',
                },
                body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
                comments: [],
                replies: [],
                date: '1 week ago',
                media: {
                  alt: 'genetics',
                  src: '/images/genetics.jpeg',
                },
                reactions: [],
                title: 'Cell Biology, Genetics and Evolution',
                type: 'article',
              },
              {
                author: {
                  id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                  firstName: 'Michael',
                  lastName: 'Busch',
                  photo: '/images/user-1.jpeg',
                },
                body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
                comments: [],
                replies: [],
                date: '2 weeks ago',
                note: '2. Learn before you memorize ↔ Do not try to apply Spaced Repetition to a piece of content until you have learned that content once',
                reactions: [],
                type: 'comment',
              },
              {
                author: {
                  id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                  firstName: 'Michael',
                  lastName: 'Busch',
                  photo: '/images/user-1.jpeg',
                },
                badge: {
                  date: '1 week ago',
                  icon: '🎉',
                  message: 'Newbie Alert',
                },
                body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
                comments: [],
                date: '6 days ago',
                media: {
                  alt: 'flashcard',
                  src: '/images/flash-card-1.png',
                },
                reactions: [
                  {
                    count: 4,
                    type: '🔥',
                  },
                  {
                    count: 2,
                    type: '🎉',
                  },
                  {
                    count: 1,
                    type: '🤘',
                  },
                ],
                replies: [
                  {
                    author: {
                      id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                      firstName: 'Michael',
                      lastName: 'Busch',
                      photo: '/images/user-1.jpeg',
                    },
                    body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
                    comments: [],
                    replies: [
                      {
                        author: {
                          id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                          firstName: 'Michael',
                          lastName: 'Busch',
                          photo: '/images/user-1.jpeg',
                        },
                        body: 'And I really meant it!',
                        comments: [],
                        replies: [
                          {
                            author: {
                              id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
                              firstName: 'Michael',
                              lastName: 'Busch',
                              photo: '/images/user-1.jpeg',
                            },
                            body: 'Seriously!',
                            comments: [],
                            replies: [],
                            date: '6 days ago',
                            reactions: [],
                            type: 'reply',
                          },
                        ],
                        date: '6 days ago',
                        reactions: [],
                        type: 'reply',
                      },
                    ],
                    date: '6 days ago',
                    reactions: [],
                    type: 'reply',
                  },
                ],
                title: 'Cell Biology, Genetics and Evolution',
                type: 'flashcard',
              },
            ],
            replies: [],
            date: '6 days ago',
            media: {
              alt: 'flashcard',
              src: '/images/flash-card-1.png',
            },
            reactions: [
              {
                count: 4,
                type: '🔥',
              },
              {
                count: 2,
                type: '🎉',
              },
              {
                count: 1,
                type: '🤘',
              },
            ],
            title: 'Ecosystems and Communities',
            type: 'flashcard',
          },
        ],
        title: 'Cell Biology, Genetics and Evolution',
        id: '1ee0920a-5b5e-4605-a8bd-27de171e3cef',
      };

      return Promise.resolve(article);
    },
  };
}
