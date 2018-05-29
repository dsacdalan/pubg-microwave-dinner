const assert = require('assert');
const validate = require('../src/validate');

describe('Validate', function() {
  describe('Validate playerArgs', function() {
    describe('valid args with platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerId: 'account.1234',
          platformRegion: 'pc-na'
        };
        validate.playerArgs(args);
      });
    });
    describe('valid args without platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerId: 'account.1234'
        };
        validate.playerArgs(args);
      });
    });
    describe('invalid args', function() {
      it('should throw an error', function() {
        var args = {
          bad: [100]
        };
        assert.throws(
          () => {
            validate.playerArgs(args);
          },
          Error
        );
      });
    });
  });
  
  describe('Validate playersArgs', function() {
    describe('valid args with platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerIds: ['id'],
          playerNames: ['name'],
          platformRegion: 'pc-na'
        };
        validate.playersArgs(args);
      });
    });
    describe('valid args without platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerIds: ['id'],
          playerNames: ['name']
        };
        validate.playersArgs(args);
      });
    });
    describe('valid args without Ids or platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerNames: ['name']
        };
        validate.playersArgs(args);
      });
    });
    describe('valid args without Names or platform region', function() {
      it('should not throw an error', function() {
        var args = {
          playerIds: ['id']
        };
        validate.playersArgs(args);
      });
    });
  });
  
  describe('Validate matchArgs', function() {
    describe('valid args with platform region', function() {
      it('should not throw an error', function() {
        var args = {
          matchId: 'account.1234',
          platformRegion: 'pc-na'
        };
        validate.matchArgs(args);
      });
    });
    describe('valid args without platform region', function() {
      it('should not throw an error', function() {
        var args = {
          matchId: 'account.1234'
        };
        validate.matchArgs(args);
      });
    });
    describe('invalid args', function() {
      it('should throw an error', function() {
        var args = {
          bad: 'account.123'
        };
        assert.throws(
          () => {
            validate.gmatchArgs(args);
          },
          Error
        );
      });
    });
  });
  
  describe('Validate platformRegion', function() {
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
  
  describe('Validate Retention Window', function() {
    describe('Many years old', function() {
      it('should throw an error', function() {
        assert.throws(
          () => {
            var date = new Date('01/01/2010 UTC');
            validate.sampleRetention(date);
          },
          Error
        );
      });
    });
  });
});