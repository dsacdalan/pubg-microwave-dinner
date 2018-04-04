const assert = require('assert');
const format = require('../src/format');


describe('Format', function() {
  describe('valid platform region', function() {
    it('should return the same platform region', function() {
      var platformRegion = 'xbox-as';
      var actual = format.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('invalid platform region', function() {
    it('should return pc-na', function() {
      var platformRegion = 'BAD';
      var actual = format.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    }) ;
  });
});