const getMatch = require('../src/getMatch');


var platformRegion = 'pc-na';
var matchId = '480198d4-b80e-469a-b752-47882325ddba';

describe('getMatch', function() {
  this.timeout(0);
  describe('valid match id', function() {
    it('should return data', function(done) {
      getMatch.getMatch(platformRegion, matchId, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});