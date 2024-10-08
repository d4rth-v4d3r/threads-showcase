import { app } from './setup';

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port.toString()}/api`);
});

server.on('error', console.error);
