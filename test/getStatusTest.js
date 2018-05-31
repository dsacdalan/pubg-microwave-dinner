const getStatus = require('../src/getStatus');
const httpRequest = require('../src/httpRequest');
const sinon = require('sinon');

describe('GetStatus', function() {
  var mock;
  before(function() {
    var status = {
      data: {
        type: 'status',
        id: 'pubg-api',
        attributes: {
          version: 'v9.10.0',
          releasedAt: '2018-05-30T19:10:16Z'
        }
      }
    };
    // eslint-disable-next-line no-unused-vars    
    mock = sinon.stub(httpRequest, 'get').callsFake((key, path, done) =>
      done(null, status)
    );
  });
  after(function() {
    mock.restore();
  });
  it('should return data', function(done) {
    getStatus.getStatus((err) => {
      if (err) done(err);
      else done();
    });
  });
});