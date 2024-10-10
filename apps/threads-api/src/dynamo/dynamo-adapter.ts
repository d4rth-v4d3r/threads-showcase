import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { GetCommand } from '@aws-sdk/lib-dynamodb';
import {
  Article,
  ArticleRepository,
  Comment,
  CommentType,
  NotFoundError,
} from '@threads/core';
import { Config } from '../config/env';
import { ArticlesTable } from './articles-table.ts/articles-table';

function mapComment(
  comment: ArticlesTable['comments'][number],
): Comment {
  const parsedComment: Comment = {
    id: comment.id,
    author: {
      id: comment.author.id,
      firstName: comment.author.firstname,
      lastName: comment.author.lastname,
      photo: '/images/user-2.jpeg',
    },
    body: comment.body,
    title: comment.title,
    note: comment.note,
    date: comment.date,
    type: comment.type as CommentType,
    reactions: comment.reactions.map((reaction) => ({
      count: reaction.count,
      type: reaction.type,
    })),
    badge: comment.badge && {
      date: comment.badge.date,
      icon: comment.badge.icon,
      message: comment.badge.message,
    },
    comments: comment.comments.map(mapComment),
    replies: comment.replies.map(mapComment),
    media: comment.media && {
      alt: comment.media.alt,
      src: comment.media.thumbnail,
    },
  };

  return parsedComment;
}

export function dynamoAdapter(): ArticleRepository {
  const client = new DynamoDBClient({
    endpoint: Config.AWS_DYNAMODB_ENDPOINT,
  });

  return {
    getArticleById: async (id) => {
      const getCommand = new GetCommand({
        TableName: 'articles',
        // Requires the complete primary key. For the movies table, the primary key
        // is only the id (partition key).
        Key: {
          id,
        },
      });

      const result = await client.send(getCommand);

      const articleRecord = result.Item as ArticlesTable | undefined;

      if (!articleRecord)
        throw new NotFoundError('Article not found in AWS');

      const article: Article = {
        id: articleRecord.id,
        title: articleRecord.title,
        authors: articleRecord.authors.map((author) => ({
          id: author.id,
          firstName: author.firstname,
          lastName: author.lastname,
          flashcards: 143,
          photo: '/images/user-1.jpeg',
          subscribers: 58,
        })),
        thumbnail: articleRecord.thumbnail,
        comments: articleRecord.comments.map((comment) =>
          mapComment(comment),
        ),
      };

      return Article.parse(article);
    },
  };
}
