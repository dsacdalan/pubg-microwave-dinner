const getStatus = require('../src/getStatus');

describe('GetStatus', function() {
  this.timeout(0);
  it('should return data', function(done) {
    getStatus.getStatus((err) => {
      if (err) done(err);
      else done();
    });
  });
});