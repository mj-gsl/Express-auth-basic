import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

let server;
let port = 3001;

describe('Authentication Routes', function () {
  before((done) => {
    server = app.listen(port, () => {
      console.log(`Test server running on port ${port}`);
      done();
    });
  });

  after((done) => {
    server.close(() => {
      console.log('Test server stopped');
      done();
    });
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

  after(() => {
    process.exit(0); 
  });
});
