const getPlayer = require('../src/getPlayer');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';

var id = 'account.6ea11c9dcec747f3ab57c829a129394c';
var id2 = 'account.068e0cb30d524573ac38958094968d51';
var name = 'cheeseter550';
var name2 = 'Zaith5';

var singlePlayerId = [id];
var singleAccountName = [name];
var accountNames = [name, name2];
var accountIds = [id, id2];

describe('getSinglePlayer', function() {
  describe('valid player id', function() {
    it('should return data', function(done) {
      getPlayer.getSinglePlayer(key, platformRegion, id, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});

describe('getPlayers', function() {
  describe('single player name', function() {
    it('should return data', function(done) {
      getPlayer.getPlayers(key, platformRegion, null, singleAccountName, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
  describe('single player id', function() {
    it('should return data', function(done) {
      getPlayer.getPlayers(key, platformRegion, singlePlayerId, null, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });

  describe('multiple player names', function() {
    it('should return data', function(done) {
      getPlayer.getPlayers(key, platformRegion, null, accountNames, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });

  describe('multiple player ids', function() {
    it('should return data', function(done) {
      getPlayer.getPlayers(key, platformRegion, accountIds, null, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});