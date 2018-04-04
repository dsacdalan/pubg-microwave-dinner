const MicrowaveDinner = require('../index');
const platformRegion = 'pc-na';
const token = '';

MicrowaveDinner.setToken(token);

describe('Player', function() {
  describe('Get valid player', function() {
    it('should return data', function(done) {
      MicrowaveDinner.getSinglePlayer(platformRegion, 'account.6ea11c9dcec747f3ab57c829a129394c', (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('Got player without a Platform Region', function() {
    it('should default to PC-NA and continue'), function(done) {
      MicrowaveDinner.getSinglePlayer('account.6ea11c9dcec747f3ab57c829a129394c', (err) => {
        if (err) done(err);
        else done();
      });
    };
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