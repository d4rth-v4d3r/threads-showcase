import express from 'express';
import { getArticleFactory } from '../../app/get-article';
import { articleJsonAdapter } from '../sample-json/article-json-adapter';

export const articlesRouter = express.Router();

// Route to get an article by ID
articlesRouter.get('/:id', (req, res, next) => {
  const articleRepository = articleJsonAdapter();
  const articleId = req.params.id;

  void getArticleFactory({ articleRepository })(articleId)
    .then((article) => {
      res.json(article);
    })
    .catch((e: unknown) => {
      next(e);
    });
});
