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
            id: '225fe5aa-b219-44fd-9963-7a594a19b263',
            author: {
              id: 'c8a40af1-fa35-4116-ad27-322a2bfa00ac',
              firstName: 'Michael',
              lastName: 'Busch',
              photo: '/images/user-1.jpeg',
            },
            body: 'Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...',
            comments: [
              {
                id: '2f92b96b-268b-403d-9d11-f48cb54a0853',
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
                id: '288051cf-b450-4fba-8a9f-85f637ef0c21',
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
                id: '82af64dd-3d59-4e87-9cf5-dc0d4de2919d',
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
                    id: '7f55de39-cd47-435d-8b69-3235337403af',
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
                        id: 'e3c5bb77-d767-4926-97fe-d39a47e42069',
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
                            id: 'da1fd23f-9a85-4133-b7c0-e04f6f10dc99',
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
