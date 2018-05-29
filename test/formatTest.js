const assert = require('assert');
const format = require('../src/format');

describe('Format', function() {
  describe('Format Error', function() {
    describe('details error', function() {
      it('should return a formatted Error object', function(done) {
        var statusCode = 404;
        var detail = 'Detail';
        var message = 'Message';
        var error = {
          detail: detail,
          message: message
        };
        format.error(statusCode, error, (actual) => {
          if(!assert.equal(actual.statusCode, statusCode)) {
            done(false);
          } else if (!assert.equal(actual.detail, detail)) {
            done(false);
          } else if (!assert.equal(actual.message, message)) {
            done(false);
          } else {
            done();
          }
        });
      });
    });
    describe('message error', function() {
      it('should return a formatted Error object', function(done) {
        var statusCode = 404;
        var message = 'Message';
        var error = {
          message: message
        };
        format.error(statusCode, error, (actual) => {
          if(!assert.equal(actual.statusCode, statusCode)) {
            done(false);
          } else if (!assert.equal(actual.detail, '')) {
            done(false);
          } else if (!assert.equal(actual.message, message)) {
            done(false);
          } else {
            done();
          }
        });
      });
    });
    describe('429 error', function() {
      it('should return a formatted Error object', function(done) {
        var statusCode = 429;
        var error = {};
        format.error(statusCode, error, (actual) => {
          if(!assert.equal(actual.statusCode, statusCode)) {
            done(false);
          } else if (!assert.equal(actual.detail, '')) {
            done(false);
          } else if (!assert.equal(actual.message, 'Too many requests')) {
            done(false);
          } else {
            done();
          }
        });
      });
    });
  });
  
  describe('Format Players Endpoint', function() {
    describe('filter on PlayerIds', function() {
      it('should return a valid endpoint', function(done) {
        var playerIds = ['asdf', '1234','xyz'];
        format.playersEndpoint(playerIds, null, (actual) => {
          var expected = '?filter[playerIds]=asdf,1234,xyz';
          if (actual === expected) done();
          else done(new Error());
        });
      });
    });
    describe('filter on PlayerNames', function() {
      it('should return a valid endpoint', function(done) {
        var playerNames = ['asdf', '1234','xyz'];
        format.playersEndpoint(null, playerNames, (actual) => {
          var expected = '?filter[playerNames]=asdf,1234,xyz';
          if (actual === expected) done();
          else done(new Error());
        });
      });
    });
    describe('filter on PlayerIds and PlayerNames', function() {
      it('should return a valid endpoint', function(done) {
        var playerIds = ['123', 'xyz'];
        var playerNames = ['player', 'player2'];
        format.playersEndpoint(playerIds, playerNames, (actual) => {
          var expected = '?filter[playerIds]=123,xyz&filter[playerNames]=player,player2';
          if (actual === expected) done();
          else done(new Error());
        });
      });
    });
    describe('filter on one PlayerId', function() {
      it('should return a valid endpoint', function(done) {
        var playerIds = ['asdf'];
        format.playersEndpoint(playerIds, null, (actual) => {
          var expected = '?filter[playerIds]=asdf';
          if (actual === expected) done();
          else done(new Error());
        });
      });
    });
    describe('filter on one PlayerName', function() {
      it('should return a valid endpoint', function(done) {
        var playerNames = ['asdf'];
        format.playersEndpoint(null, playerNames, (actual) => {
          var expected = '?filter[playerNames]=asdf';
          if (actual === expected) done();
          else done(new Error());
        });
      });
    });
    describe('filter on nothing', function() {
      it('should return an empty endpoint', function(done) {
        format.playersEndpoint(null, null, (actual) => {
          if (actual === '') done();
          else done(new Error());
        });
      });
    });
  });

  describe('Format path', function() {
    it('should work',function() {
      var expected = '/shards/pc-na/matches/2cd71251-2067-41f2-8cd3-f880e45f14ef';
      var platformRegion = 'pc-na';
      var path = '/matches/' + '2cd71251-2067-41f2-8cd3-f880e45f14ef';
      var actual = format.path(platformRegion, path);
      assert.equal(actual, expected);
    });
  });

  describe('Format date', function() {
    it('should work', function(done) {
      var date = new Date('01/01/2018 UTC');
      format.ISODate(date, (err, data) => {
        if (data == '2018-01-01T00:00:00.000Z') done();
        else done(true);
      });
    });
  });
});

