const httpRequest = require('../src/httpRequest');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const key = process.env.API_KEY;

describe('HttpRequest', function() {
  this.timeout(0);
  describe('get request with valid uri and key', function() {
    it('should return data', function(done) {
      var path = '/shards/pc-na/players?filter[playerNames]=cheeseter550';
      httpRequest.get(key, path, (err) => {
        if(err) done(err);
        else done();
      });
    });
  });
  describe('get request with valid uri and without a key', function() {
    it('should return data', function(done) {
      var path = '/status';
      httpRequest.get(null, path, (err) => {
        if(err) done(err);
        else done();
      });
    });
  });
});