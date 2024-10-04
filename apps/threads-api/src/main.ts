import express from 'express';
import * as path from 'path';
import { errorHandler } from './infra/handlers/error-handler';
import { articlesRouter } from './infra/router/articles-router';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to threads-api!' });
});

const port = process.env.PORT || 3333;
app.use('/api/article', articlesRouter);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port.toString()}/api`);
});

server.on('error', console.error);
