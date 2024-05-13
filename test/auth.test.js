const { expect } = require('chai');
const request = require('supertest');
const app = require('../index.js');

describe('Authentication Routes', () => {
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
