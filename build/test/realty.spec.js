"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const realty_schema_1 = require("../modules/realties/models/realty-schema");
const _1 = require("../");
describe('Realty', () => {
    const realty = new realty_schema_1.RealtySchema({
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
        request(_1.default)
            .post('/api/v1/realties')
            .send(realty)
            .expect(201)
            .end(done);
    });
    it('should return all Realties', done => {
        request(_1.default)
            .get('/api/v1/realties')
            .expect(200)
            .end(done);
    });
    it('should return single Realty', done => {
        request(_1.default)
            .get(`/api/v1/realties/${realty._id}`)
            .expect(200)
            .end(done);
    });
    it('should delete a single Realty object', done => {
        request(_1.default)
            .delete(`/api/v1/realties/${realty._id}`)
            .expect(200)
            .end(done);
    });
});
