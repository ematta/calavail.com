import request from 'supertest';
import { app } from '../src/app';

it('It should response the GET method', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});
