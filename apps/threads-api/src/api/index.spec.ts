import request from 'supertest';
import app from './index';

describe('apps/threads-api/src/api/index.ts', () => {
  test('should show a single article', async () => {
    const response = await request(app).get(
      '/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3cef',
    );

    expect(response.status).toBe(200);
  });

  test('should reject unknown documents', async () => {
    const response = await request(app).get(
      '/api/article/1ee0920a-5b5e-4605-a8bd-27de171e3ceg',
    );

    expect(response.status).toBe(404);
  });
});
