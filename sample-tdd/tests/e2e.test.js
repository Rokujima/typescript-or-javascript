const request = require('supertest');
const app = require('./../src/index.js');

describe('Test / endpoint', () => {
  it('responds with JSON', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello from the service!');
  });
});
