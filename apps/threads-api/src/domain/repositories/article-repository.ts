import { Article } from './../entities/article';

export interface ArticleRepository {
  getArticleById(id: string): Promise<Article>;
}
