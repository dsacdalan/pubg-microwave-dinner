const getMatch = require('../src/getMatch');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';
var matchId = '2cd71251-2067-41f2-8cd3-f880e45f14ef';

describe('getMatch', function() {
  this.timeout(0);
  describe('valid match id', function() {
    it('should return data', function(done) {
      getMatch.getMatch(key, platformRegion, matchId, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});