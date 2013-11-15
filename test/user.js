var supertest = require('supertest');
var server = require('../');

describe('users', function() {

  // users.index is undefined
  describe('GET /users', function() {
    it('should return 404', function(done) {
      supertest(server)
      .get('/users')
      .expect(404, done);
    });
  });

  // use 'id' option
  describe('GET /users/:user_id', function() {
    it('should return GET /users/1 -> show', function(done) {
      supertest(server)
      .get('/users/1')
      .expect('GET /users/1 -> show', done);
    });
  });

  // use map method
  describe('GET /users/:user_id/feed', function() {
    it('should return GET /users/1/feed -> feed', function(done) {
      supertest(server)
      .get('/users/1/feed')
      .expect('GET /users/1/feed -> feed', done);
    });
  });

  // use map method(chain)
  describe('POST /users/:user_id/star', function() {
    it('should return POST /users/1/star -> addStar', function(done) {
      supertest(server)
      .post('/users/1/star')
      .expect('POST /users/1/star -> addStar', done);
    });
  });

  // use 'load' option
  describe('PUT /users/:user_id', function() {
    it('should return PUT /users/1 -> update (user_id.name=bouzuya)', function(done) {
      supertest(server)
      .put('/users/1')
      .expect('PUT /users/1 -> update (user_id.name=bouzuya)', done);
    });
  });

  // use content-negotiation
  describe('GET /users/1/messages[:format]', function() {
    describe('GET /users/1/messages.json', function() {
      it('should return GET /users/1/messages.json -> messages (format=json)', function(done) {
        supertest(server)
        .get('/users/1/messages.json')
        .expect('GET /users/1/messages[:format] -> messages (format=json)', done);
      });
    });

    describe('GET /users/1/messages.xml', function() {
      it('should return GET /users/1/messages[:format] -> messages (format=xml)', function(done) {
        supertest(server)
        .get('/users/1/messages.xml')
        .expect('GET /users/1/messages[:format] -> messages (format=xml)', done);
      });
    });

  });


});
