import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('Authentication Routes', () => {
  let server;

  before((done) => {
    server = app.listen(3000, done); // Start the server
  });

  after((done) => {
    server.close(done); // Close the server after tests
  });

  before(async () => {
    await request(app)
      .post('/auth/register')
      .send({ username: 'user1', password: 'password1' });
  });

  it('should login successfully with correct credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'user1', password: 'password1' });
    expect(res.status).to.equal(200);
  });

  it('should fail login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'user1', password: 'wrongpassword' });
    expect(res.status).to.equal(401);
  });
});
