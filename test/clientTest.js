const microwaveDinner = require('../index');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';
var playerId = 'account.6ea11c9dcec747f3ab57c829a129394c';
var playerWithoutRegion = {
  playerId: playerId
};
var playerWithRegion = {
  playerId: playerId,
  platformRegion: platformRegion
};
var match = {
  matchId: '2cd71251-2067-41f2-8cd3-f880e45f14ef'
};

var players = {
  playerIds: [playerId]
};


describe('Client with default Platform Region', function() {
  const client = new microwaveDinner.Client(key, platformRegion);
  describe('get valid player', function() {
    it('should return data', function(done) {
      client.getSinglePlayer(playerWithoutRegion, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('get valid players', function() {
    it('should return data', function(done) {
      client.getPlayers(players, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('get valid match', function() {
    it('should return data', function(done) {
      client.getMatch(match, (err) => {
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
      client.getSinglePlayer(playerWithRegion, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});