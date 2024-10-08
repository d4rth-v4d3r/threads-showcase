import { getArticleFactory } from '@threads/core';
import express from 'express';
import { getProviders } from '../container/providers';

export const articlesRouter = express.Router();

// Route to get an article by ID
articlesRouter.get('/article/:id', (req, res, next) => {
  const providers = getProviders();
  const articleId = req.params.id;

  void getArticleFactory(providers)(articleId)
    .then((article) => {
      res.json(article);
    })
    .catch((e: unknown) => {
      next(e);
    });
});
