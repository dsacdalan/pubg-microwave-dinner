const httpRequest = require('../src/httpRequest');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const key = process.env.API_KEY;

describe('httpRequest', function() {
  this.timeout(0);
  describe('get request with valid uri', function() {
    it('should return data', function(done) {
      var path = '/shards/pc-na/players?filter[playerNames]=cheeseter550';
      httpRequest.get(key, path, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});