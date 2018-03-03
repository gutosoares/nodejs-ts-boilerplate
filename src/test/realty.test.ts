import * as request from 'supertest';

import server from '../';

describe('Realty', () => {
  it('should return all Realties', done => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end(done);
  });

  it('should return single Realty', done => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end(done);
  });

  it('should create a new Realty object', done => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end(done);
  });

  it('should delete a single Realty object', done => {
    request(server)
      .get('/api/v1/')
      .expect(200)
      .end(done);
  });
});
