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
var playerWithInvalidRegion = {
  playerId: playerId,
  platformRegion: 'bad'
};

var match = {
  matchId: '480198d4-b80e-469a-b752-47882325ddba'
};

var players = {
  playerIds: [playerId]
};

describe('Client', function() {
  describe('Client with default Platform Region', function() {
    this.timeout(0);
    const client = new microwaveDinner.client(key, platformRegion);
    describe('status', function() {
      it('should return data', function(done) {
        client.getStatus((err) => {
          if (err) done(err);
          else done();
        });
      });
    });
    describe('invalid platform region', function() {
      it('should throw an error', function(done) {
        client.getMatch(playerWithInvalidRegion, (err) => {
          if (err) done();
          else done(false);
        });
      });
    });
    describe('player/players', function() {
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
    });
    describe('match', function() {
      describe('get valid match', function() {
        it('should return data', function(done) {
          client.getMatch(match, (err) => {
            if (err) done(err);
            else done();
          });
        });
      });
      describe('get empty match', function() {
        it('should return an error', function(done) {
          client.getMatch(undefined, (err) => {
            if (err) done();
            else done(false);
          });
        });
      });
    });
    describe('seasons', function() {
      describe('get seasons', function() {
        it('should return data', function(done) {
          client.getSeasons(null, (err) => {
            if (err) done(err);
            else done();
          });
        });
      });
    });
  });
  
  describe('Client with a designated Platform Region', function() {
    this.timeout(0);  
    const client = new microwaveDinner.client(key, 'xbox-na');
    describe('get valid player with different platform region', function() {
      it('should return data', function(done) {
        client.getSinglePlayer(playerWithRegion, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
});