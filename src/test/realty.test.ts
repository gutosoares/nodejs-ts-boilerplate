import * as request from 'supertest';
import { expect } from 'chai';
import { RealtySchema } from '../modules/realties/models/realty-schema';

import server from '../';

describe('Realty', () => {

  const realty = new RealtySchema({
    id: Date.now().toString(),
    name: 'TestData',
    description: 'TestData',
    price: 1,
    beds: 1,
    bath: 1,
    suite: 1,
    address: {
      zip: 'TestData',
      street: 'TestData',
      number: 'TestData',
      city: 'TestData',
    },
  });

  it('should create a Realty object', done => {
    request(server)
      .post('/api/v1/realties')
      .send(realty)
      .expect(201)
      .end(done);
  });

  it('should return all Realties', done => {
    request(server)
      .get('/api/v1/realties')
      .expect(200)
      .end(done);
  });

  it('should return single Realty', done => {
    request(server)
      .get(`/api/v1/realties/${realty._id}`)
      .expect(200)
      .end(done);
  });

  it('should delete a single Realty object', done => {
    request(server)
      .delete(`/api/v1/realties/${realty._id}`)
      .expect(200)
      .end(done);
  });
});
