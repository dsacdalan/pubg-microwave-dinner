const getMatch = require('../src/getMatch');
const httpRequest = require('../src/httpRequest');
const sinon = require('sinon');

var platformRegion = 'pc-na';
var matchId = '480198d4-b80e-469a-b752-47882325ddba';

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

describe('GetMatch', function() {
  this.timeout(0);
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
  describe('valid match id', function() {
    it('should return data', function(done) {
      getMatch.getMatch(platformRegion, matchId, (err) => {
        if (err) done(err);
        else done();
      });
    });
  });
});