import * as express from 'express';
import * as path from 'path';
import { errorHandler } from '../handlers/error-handler';
import { articlesRouter } from '../router/articles-router';

export const app = express.default();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', articlesRouter);

app.use('/', (_, res) =>
  res.json({ message: 'Welcome to threads-api!' }),
);
app.use(errorHandler);

export default app;
