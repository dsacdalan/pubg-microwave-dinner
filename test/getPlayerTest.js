const getPlayer = require('../src/getPlayer');
const httpRequest = require('../src/httpRequest');
const sinon = require('sinon');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';

var id = 'account.6ea11c9dcec747f3ab57c829a129394c';
var id2 = 'account.068e0cb30d524573ac38958094968d51';
var seasonId = 'division.bro.official.2018-05';
var name = 'cheeseter550';
var name2 = 'Zaith5';

var singlePlayerId = [id];
var singleAccountName = [name];
var accountNames = [name, name2];
var accountIds = [id, id2];

var playerArrayObject = {
  data: [
    {
      type: 'player',
      id: 'account.6ea11c9dcec747f3ab57c829a129394c',
      attributes: {
        patchVersion: '',
        name: 'cheeseter550',
        stats: null,
        titleId: 'bluehole-pubg',
        shardId: 'pc-na',
        createdAt: '2018-04-06T00:21:58Z',
        updatedAt: '2018-04-06T00:21:58Z'
      },
      relationships: {
        assets: {
          data: []
        },
        matches: {
          data: [
            {
              type: 'match',
              id: '7b75f7b1-168b-4a4e-894d-ef3d69e6bb0a'
            }
          ]
        }
      },
      links: {
        self: 'https://api.playbattlegrounds.com/shards/pc-na/players/account.6ea11c9dcec747f3ab57c829a129394c',
        schema: ''
      }
    }
  ],
  links: {
    self: 'https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=cheeseter550'
  },
  meta: {}
};

var playerSeasonObject = {
  data: {
    type: 'playerSeason',
    attributes: {
      gameModeStats: {
        duo: {
          assists: 0,
          boosts: 0,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 0,
          days: 0,
          headshotKills: 0,
          heals: 0,
          killPoints: 0,
          kills: 0,
          longestKill: 0,
          longestTimeSurvived: 0,
          losses: 0,
          maxKillStreaks: 0,
          mostSurvivalTime: 0,
          revives: 0,
          rideDistance: 0,
          roadKills: 0,
          roundMostKills: 0,
          roundsPlayed: 0,
          suicides: 0,
          teamKills: 0,
          timeSurvived: 0,
          top10s: 0,
          vehicleDestroys: 0,
          walkDistance: 0,
          weaponsAcquired: 0,
          weeklyKills: 0,
          winPoints: 0,
          wins: 0
        },
        ['duo-fpp']: {
          assists: 0,
          boosts: 0,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 0,
          days: 0,
          headshotKills: 0,
          heals: 0,
          killPoints: 0,
          kills: 0,
          longestKill: 0,
          longestTimeSurvived: 0,
          losses: 0,
          maxKillStreaks: 0,
          mostSurvivalTime: 0,
          revives: 0,
          rideDistance: 0,
          roadKills: 0,
          roundMostKills: 0,
          roundsPlayed: 0,
          suicides: 0,
          teamKills: 0,
          timeSurvived: 0,
          top10s: 0,
          vehicleDestroys: 0,
          walkDistance: 0,
          weaponsAcquired: 0,
          weeklyKills: 0,
          winPoints: 0,
          wins: 0
        },
        solo: {
          assists: 0,
          boosts: 0,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 0,
          days: 0,
          headshotKills: 0,
          heals: 0,
          killPoints: 0,
          kills: 0,
          longestKill: 0,
          longestTimeSurvived: 0,
          losses: 0,
          maxKillStreaks: 0,
          mostSurvivalTime: 0,
          revives: 0,
          rideDistance: 0,
          roadKills: 0,
          roundMostKills: 0,
          roundsPlayed: 0,
          suicides: 0,
          teamKills: 0,
          timeSurvived: 0,
          top10s: 0,
          vehicleDestroys: 0,
          walkDistance: 0,
          weaponsAcquired: 0,
          weeklyKills: 0,
          winPoints: 0,
          wins: 0
        },
        ['solo-fpp']: {
          assists: 0,
          boosts: 7,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 606.6106,
          days: 4,
          headshotKills: 1,
          heals: 7,
          killPoints: 1041.0991,
          kills: 4,
          longestKill: 6.342745,
          longestTimeSurvived: 1649.963,
          losses: 10,
          maxKillStreaks: 1,
          mostSurvivalTime: 1649.963,
          revives: 0,
          rideDistance: 738.0658,
          roadKills: 0,
          roundMostKills: 2,
          roundsPlayed: 10,
          suicides: 1,
          teamKills: 1,
          timeSurvived: 5311.85,
          top10s: 2,
          vehicleDestroys: 0,
          walkDistance: 6548.0347,
          weaponsAcquired: 26,
          weeklyKills: 0,
          winPoints: 1514.805,
          wins: 0
        },
        squad: {
          assists: 0,
          boosts: 0,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 0,
          days: 0,
          headshotKills: 0,
          heals: 0,
          killPoints: 0,
          kills: 0,
          longestKill: 0,
          longestTimeSurvived: 0,
          losses: 0,
          maxKillStreaks: 0,
          mostSurvivalTime: 0,
          revives: 0,
          rideDistance: 0,
          roadKills: 0,
          roundMostKills: 0,
          roundsPlayed: 0,
          suicides: 0,
          teamKills: 0,
          timeSurvived: 0,
          top10s: 0,
          vehicleDestroys: 0,
          walkDistance: 0,
          weaponsAcquired: 0,
          weeklyKills: 0,
          winPoints: 0,
          wins: 0
        },
        ['squad-fpp']: {
          assists: 0,
          boosts: 0,
          dBNOs: 0,
          dailyKills: 0,
          damageDealt: 0,
          days: 0,
          headshotKills: 0,
          heals: 0,
          killPoints: 0,
          kills: 0,
          longestKill: 0,
          longestTimeSurvived: 0,
          losses: 0,
          maxKillStreaks: 0,
          mostSurvivalTime: 0,
          revives: 0,
          rideDistance: 0,
          roadKills: 0,
          roundMostKills: 0,
          roundsPlayed: 0,
          suicides: 0,
          teamKills: 0,
          timeSurvived: 0,
          top10s: 0,
          vehicleDestroys: 0,
          walkDistance: 0,
          weaponsAcquired: 0,
          weeklyKills: 0,
          winPoints: 0,
          wins: 0
        }
      }
    },
    relationships: {
      matchesSoloFPP: {
        data: [
          {
            type: 'match',
            id: 'd5a70aa1-be78-4f2f-85d1-d80620df4d6e'
          }
        ]
      },
      matchesDuo: {
        data: []
      },
      matchesDuoFPP: {
        data: []
      },
      matchesSquad: {
        data: []
      },
      matchesSquadFPP: {
        data: []
      },
      season: {
        data: {
          type: 'season',
          id: 'division.bro.official.2018-05'
        }
      },
      player: {
        data: {
          type: 'player',
          id: 'account.6ea11c9dcec747f3ab57c829a129394c'
        }
      },
      matchesSolo: {
        data: []
      }
    }
  },
  links: {
    self: 'https://api.playbattlegrounds.com/shards/pc-na/players/account.6ea11c9dcec747f3ab57c829a129394c/seasons/division.bro.official.2018-05'
  },
  meta: {}
};

var playerObject = {
  data: {
    type: 'player',
    id: 'account.6ea11c9dcec747f3ab57c829a129394c',
    attributes: {
      patchVersion: '',
      name: 'cheeseter550',
      stats: null,
      titleId: 'bluehole-pubg',
      shardId: 'pc-na',
      createdAt: '2018-04-06T00:21:58Z',
      updatedAt: '2018-04-06T00:21:58Z'
    },
    relationships: {
      assets: {
        data: []
      },
      matches: {
        data: [
          {
            type: 'match',
            id: '7b75f7b1-168b-4a4e-894d-ef3d69e6bb0a'
          }
        ]
      }
    },
    links: {
      self: 'https://api.playbattlegrounds.com/shards/pc-na/players/account.6ea11c9dcec747f3ab57c829a129394c',
      schema: ''
    }
  },
  links: {
    self: 'https://api.playbattlegrounds.com/shards/pc-na/players/account.6ea11c9dcec747f3ab57c829a129394c'
  },
  meta: {}
};

describe('GetPlayer', function() {
  this.timeout(0);
  describe('getSinglePlayer', function() {
    describe('valid player id', function() {
      var mock;
      before(function() {
        var player = playerObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, player)
        );
      });
      after(function() {
        mock.restore();
      });
      it('should return data', function(done) {
        getPlayer.getSinglePlayer(key, platformRegion, id, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
  describe('getPlayerSeason', function() {
    var mock;
    before(function() {
      var playerSeason = playerSeasonObject;
      // eslint-disable-next-line no-unused-vars    
      mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
        done(null, playerSeason)
      );
    });
    after(function() {
      mock.restore();
    });
    describe('valid player id and season id', function() {
      it('should return data', function(done) {
        getPlayer.getPlayerSeason(key, platformRegion, id, seasonId, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
  describe('getPlayers', function() {
    describe('single player name', function() {
      var mock;
      before(function() {
        var player = playerArrayObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, player)
        );
      });
      after(function() {
        mock.restore();
      });
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, null, singleAccountName, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
    describe('single player id', function() {
      var mock;
      before(function() {
        var player = playerArrayObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, player)
        );
      });
      after(function() {
        mock.restore();
      });
      it('should return data', function(done) {

        getPlayer.getPlayers(key, platformRegion, singlePlayerId, null, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  
    describe('multiple player names', function() {
      var mock;
      before(function() {
        var player = playerArrayObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, player)
        );
      });
      after(function() {
        mock.restore();
      });
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, null, accountNames, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  
    describe('multiple player ids', function() {
      var mock;
      before(function() {
        var player = playerArrayObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, player)
        );
      });
      after(function() {
        mock.restore();
      });
      it('should return data', function(done) {
        getPlayer.getPlayers(key, platformRegion, accountIds, null, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
});