const microwaveDinner = require('../index');

var key = '';
var platformRegion = 'pc-na';
var playerWithoutRegion = {
  id: 'account.6ea11c9dcec747f3ab57c829a129394c'
};
var playerWithRegion = {
  id: 'account.6ea11c9dcec747f3ab57c829a129394c',
  platformRegion: platformRegion
};

describe('Client with default Platform Region', function() {
  const client = new microwaveDinner.Client(key, platformRegion);
  describe('get valid player', function() {
    it('should return data', function(done) {
      client.getSinglePlayer(playerWithoutRegion, (err, player) => {
        if (err) done(err);
        else done();
      });
    });
  });
});

describe('Client with a designated Platform Region', function() {
  const client = new microwaveDinner.Client(key, 'xbox-na');
  describe('get valid player with different platform region', function() {
    it('should return data', function(done) {
      client.getSinglePlayer(playerWithRegion, (err, player) => {
        if (err) done(err);
        else done();
      });
    });
  });
});