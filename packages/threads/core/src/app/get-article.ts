import { Article } from '../domain/entities';
import { ArticleRepository } from '../domain/repositories/article-repository';

export function getArticleFactory({
  articleRepository,
}: {
  articleRepository: ArticleRepository;
}) {
  return async function getArticle(id: string): Promise<Article> {
    return articleRepository.getArticleById(id);
  };
}
