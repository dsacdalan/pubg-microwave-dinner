const getSeasons = require('../src/getSeasons');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';

describe('GetSeasons', function() {
  describe('getSeasons', function() {
    it('should return data', function(done) {
      getSeasons.getSeasons(key, platformRegion, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});