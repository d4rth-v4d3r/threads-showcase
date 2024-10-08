interface ArticleComment {
  id: string;
  author: ArticleAuthor;
  body: string;
  comments: ArticleComment[];
  date: string;
  reactions: ArticleReaction[];
  replies: ArticleComment[];
  type: string;
  note?: string;
  badge?: ArticleCommentBadge;
  title?: string;
  media?: ArticleMedia;
}

interface ArticleCommentBadge {
  date: string;
  icon: string;
  message: string;
}

interface ArticleReaction {
  count: number;
  type: string;
}

interface ArticleMedia {
  alt: string;
  thumbnail: string;
}

interface ArticleAuthor {
  id: string;
  firstname: string;
  lastname: string;
}

export interface ArticlesTable {
  authors: ArticleAuthor[];
  comments: ArticleComment[];
  title: string;
  id: string;
  thumbnail: string;
}
