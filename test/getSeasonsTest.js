const getSeasons = require('../src/getSeasons');
const httpRequest = require('../src/httpRequest');
const sinon = require('sinon');

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

var key = process.env.API_KEY;
var platformRegion = 'pc-na';

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

describe('GetSeasons', function() {
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
    getSeasons.getSeasons(key, platformRegion, (err) => {
      if (err) done(err);
      else done();
    });
  });
});