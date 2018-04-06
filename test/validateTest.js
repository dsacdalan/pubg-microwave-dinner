const assert = require('assert');
const validate = require('../src/validate');


describe('Platform Region', function() {
  describe('xbox-as', function() {
    it('should return itself', function() {
      var platformRegion = 'xbox-as';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('xbox-eu', function() {
    it('should return itself', function() {
      var platformRegion = 'xbox-eu';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('xbox-na', function() {
    it('should return itself', function() {
      var platformRegion = 'xbox-na';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('xbox-oc', function() {
    it('should return itself', function() {
      var platformRegion = 'xbox-oc';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-krjp', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-krjp';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-na', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-na';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-eu', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-eu';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-oc', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-oc';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-kakao', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-kakao';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-sea', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-sea';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-sa', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-sa';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('pc-as', function() {
    it('should return itself', function() {
      var platformRegion = 'pc-as';
      var actual = validate.platformRegion(platformRegion);
      assert.equal(actual, platformRegion);
    });
  });
  describe('undefined', function() {
    it('should default to pc-na', function() {
      var actual = validate.platformRegion(undefined);
      assert.equal(actual, 'pc-na');
    });
  });
  describe('bad', function() {
    it('should default to pc-na', function() {
      var platformRegion = 'bad';
      assert.throws(
        () => {
          validate.platformRegion(platformRegion);
        },
        Error
      );
    });
  });
});