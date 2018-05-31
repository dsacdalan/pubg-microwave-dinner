const microwaveDinner = require('../index');
const httpRequest = require('../src/httpRequest');
const sinon = require('sinon');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';
var playerId = 'account.6ea11c9dcec747f3ab57c829a129394c';
var seasonId = 'division.bro.official.2018-05';
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
var playerSeasons = {
  playerId: playerId,
  seasonId: seasonId
};
var match = {
  matchId: '480198d4-b80e-469a-b752-47882325ddba'
};
var players = {
  playerIds: [playerId]
};

var statusObject = {
  data: {
    type: 'status',
    id: 'pubg-api',
    attributes: {
      version: 'v9.10.0',
      releasedAt: '2018-05-30T19:10:16Z'
    }
  }
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
var matchObject = {
  data: {
    type: 'match',
    id: '480198d4-b80e-469a-b752-47882325ddba',
    attributes: {
      duration: 2172,
      stats: null,
      gameMode: 'solo-fpp',
      titleId: 'bluehole-pubg',
      shardId: 'pc-na',
      tags: null,
      mapName: 'Erangel_Main',
      createdAt: '2018-05-22T21:48:15Z'
    },
    relationships: {
      rosters: {
        data: [
          {
            type: 'roster',
            id: '7979264e-ef64-4870-ad06-75266a73f3d4'
          }
        ]
      },
      assets: {
        data: [
          {
            type: 'asset',
            id: '1121d675-5e0f-11e8-b11f-0a5864618143'
          }
        ]
      }
    },
    links: {
      self: 'https://api.playbattlegrounds.com/shards/pc-na/matches/480198d4-b80e-469a-b752-47882325ddba',
      schema: ''
    }
  },
  included: [
    {
      type: 'roster',
      id: '4a404d0d-9ea2-438e-800d-0880df305207',
      attributes: {
        stats: {
          rank: 92,
          teamId: 100017
        },
        won: 'false',
        shardId: 'pc-na'
      },
      relationships: {
        team: {
          data: null
        },
        participants: {
          data: [
            {
              type: 'participant',
              id: '46b95189-b51f-4b39-bb49-bf1d56e52175'
            }
          ]
        }
      }
    }
  ],
  links: {
    self: 'https://api-origin.playbattlegrounds.com/shards/pc-na/matches/480198d4-b80e-469a-b752-47882325ddba'
  },
  meta: {}
};
var seasonObject = {
  data: [
    {
      type: 'season',
      id: 'division.bro.official.2017-beta',
      attributes: {
        isCurrentSeason: false,
        isOffseason: false
      }
    }
  ],
  links: {
    self: 'https://api.playbattlegrounds.com/shards/pc-na/seasons'
  },
  meta: {}
};
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


describe('Client', function() {
  describe('Client with default Platform Region', function() {
    this.timeout(0);
    const client = new microwaveDinner.client(key, platformRegion);
    describe('status', function() {
      var mock;
      before(function() {
        var status = statusObject;
        // eslint-disable-next-line no-unused-vars    
        mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
          done(null, status)
        );
      });
      after(function() {
        mock.restore();
      });
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
          client.getSinglePlayer(playerWithoutRegion, (err) => {
            if (err) done(err);
            else done();
          });
        });
      });
      describe('get valid players', function() {
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
          client.getPlayers(players, (err) => {
            if (err) done(err);
            else done();
          });
        });
      });
    });
    describe('get valid player season', function() {
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
      it('should return data', function(done) {
        client.getPlayerSeason(playerSeasons, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
    describe('match', function() {
      describe('get valid match', function() {
        var mock;
        before(function() {
          var match = matchObject;
          // eslint-disable-next-line no-unused-vars    
          mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
            done(null, match)
          );
        });
        after(function() {
          mock.restore();
        });
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
        var mock;
        before(function() {
          var season = seasonObject;
          // eslint-disable-next-line no-unused-vars    
          mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) => 
            done(null, season)
          );
        });
        after(function() {
          mock.restore();
        });
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
        client.getSinglePlayer(playerWithRegion, (err) => {
          if (err) done(err);
          else done();
        });
      });
    });
  });
});