import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

console.log("Starting tests...");

describe('Authentication Routes', () => {
  before(async () => {
    console.log("Running before hook...");
    await request(app)
      .post('/auth/register')
      .send({ username: 'user1', password: 'password1' });
  });

  it('should login successfully with correct credentials', async () => {
    console.log("Running login test with correct credentials...");
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'user1', password: 'password1' });
    expect(res.status).to.equal(200);
  });

  it('should fail login with incorrect credentials', async () => {
    console.log("Running login test with incorrect credentials...");
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'user1', password: 'wrongpassword' });
    expect(res.status).to.equal(401);
  });
});

console.log("Tests completed.");
