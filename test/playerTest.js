const getPlayer = require('../src/getPlayer');

var key = '';
var platformRegion = 'pc-na';

var id = 'account.6ea11c9dcec747f3ab57c829a129394c';
var id2 = 'account.9b0ef7539c2d424ea235d8c0f63e60b7';
var name = 'cheeseter550';
var name2 = 'Papaleguas_TX';

var singlePlayerId = [id];
var singlePlayerId2 = [id2];
var singleAccountName = [name];
var accountNames = [name, name2];
var accountIds = [id, id2];

describe('GetPlayer', function() {

  describe('Get single player', function() {
    describe('valid player id', function() {
      it('should return data', function(done) {
        getPlayer.getSinglePlayer(key, platformRegion, id, (err, player) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
  
  describe('Get multiple players', function() {
    describe('single player name', function() {
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, null, singleAccountName, (err, data) => {
          if (err) done(err);
          else done();
        });
      });
    });
    describe('single player id', function() {
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, singlePlayerId, null, (err, data) => {
          if (err) done(err);
          else done();
        });
      });
    });

    describe('multiple player names', function() {
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, null, accountNames, (err, data) => {
          if (err) done(err);
          else done();
        });
      });
    });

    describe('multiple player ids', function() {
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, accountIds, null, (err, data) => {
          if (err) done(err);
          else done();
        });
      });
    });
    describe('player id and player name', function() {
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, singlePlayerId2, singleAccountName, (err, data) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
});