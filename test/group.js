var supertest = require('supertest');
var server = require('../');

describe('groups', function() {
  describe('GET /groups', function() {
    it('should return GET /groups -> index', function(done) {
      supertest(server)
      .get('/groups')
      .expect('GET /groups -> index', done);
    });
  });

  describe('GET /groups/new', function() {
    it('should return GET /groups/new -> new', function(done) {
      supertest(server)
      .get('/groups/new')
      .expect('GET /groups/new -> new', done);
    });
  });

  describe('POST /groups', function() {
    it('should return POST /groups -> create', function(done) {
      supertest(server)
      .post('/groups')
      .expect('POST /groups -> create', done);
    });
  });

  describe('GET /groups/:group', function() {
    it('should return GET /groups/1 -> show', function(done) {
      supertest(server)
      .get('/groups/1')
      .expect('GET /groups/1 -> show', done);
    });
  });

  describe('GET /groups/:group/edit', function() {
    it('should return GET /groups/1/edit -> edit', function(done) {
      supertest(server)
      .get('/groups/1/edit')
      .expect('GET /groups/1/edit -> edit', done);
    });
  });

  describe('PUT /groups/:group/edit', function() {
    it('should return PUT /groups/1 -> update', function(done) {
      supertest(server)
      .put('/groups/1')
      .expect('PUT /groups/1 -> update', done);
    });
  });

  describe('DELETE /groups/:group', function() {
    it('should return DELETE /groups/1 -> destroy', function(done) {
      supertest(server)
      .del('/groups/1')
      .expect('DELETE /groups/1 -> destroy', done);
    });
  });
});

