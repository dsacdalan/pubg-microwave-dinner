const MicrowaveDinner = require('../index');
const platformRegion = 'pc-na';
const token = '';

MicrowaveDinner.setToken(token);

describe('Player', function() {
  this.timeout(10000);
  describe('Get valid player', function() {
    it('should return data', function(done) {
      MicrowaveDinner.getSinglePlayer(platformRegion, 'account.6ea11c9dcec747f3ab57c829a129394c', (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('Get valid player with invalid platform region', function() {
    it('should defualt ot pc-na and return data', function(done) {
      MicrowaveDinner.getSinglePlayer('bad', 'account.6ea11c9dcec747f3ab57c829a129394c', (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('Get invalid player', function() {
    it('should return a 404 error', function(done) {
      MicrowaveDinner.getSinglePlayer(platformRegion, 'BAD', (err) => {
        if (err.statusCode === 404) done();
        else  done(true);
      });
    });
  });
});