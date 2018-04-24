const getPlayer = require('./getPlayer');
const getMatch = require('./getMatch');
const getStatus = require('./getStatus');
const validate = require('./validate');

// eslint-disable-next-line no-unused-vars
var Player = require('./class/player/player'); 
// eslint-disable-next-line no-unused-vars
var Match = require('./class/match/match');
// eslint-disable-next-line no-unused-vars
var Status = require('./class/status/status');
module.exports = class Client {
  /**
   * Creates a new client instance for Microwave Dinner.
   * 
   * @param {string} key - PUBG API developer key.
   * @param {string} [platformRegion] - One of the following:
   * xbox-as, xbox-eu, xbox-na, xbox-oc,
   * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
   * Defaults to pc-na.
   */
  constructor(key, platformRegion) {
    if(!key){
      throw new Error('Missing API key.') ;
    } else {
      this.key = key;
    }

    if(!platformRegion) {
      this.platformRegion = 'pc-na';
    } else {
      this.platformRegion = validate.platformRegion(platformRegion);
    }
  }

  /**
   * Gets a single player from a Player ID and Platform Region.
   * 
   * @param {object} args 
   * @param {string} args.playerId
   * @param {string} [args.platformRegion] - Defaults to the client's default Platform Region. 
   * @param {function(Error, Player)} done 
   */
  getSinglePlayer(args, done)  {
    validate.playerArgs(args);

    var currentPlatformRegion = args.platformRegion
      ? validate.platformRegion(args.platformRegion)
      : this.platformRegion;

    getPlayer.getSinglePlayer(this.key, currentPlatformRegion, args.playerId, (err, player) => {
      if(err) done(err);
      else done(null, player);
    });
  }

  /**
   * Gets a collection of players 
   * from a Player ID and/or Player Name array and Platform Region.
   * 
   * @param {object} args 
   * @param {string[]} [args.playerIds]
   * @param {string[]} [args.playerNames]
   * @param {string} [args.platformRegion]
   * @param {function(Error, Player[])} done 
   */
  getPlayers(args, done) {
    validate.playersArgs(args);    

    var currentPlatformRegion = args.platformRegion
      ? validate.platformRegion(args.platformRegion)
      : this.platformRegion;

    getPlayer.getPlayers(this.key, currentPlatformRegion, args.playerIds, args.playerNames, (err, players) => {
      if(err) done(err);
      else done(null, players);
    });
  }

  /**
   * Gets a match from a Match ID and Platform Region.
   * 
   * @param {object} args 
   * @param {string} args.matchId
   * @param {string} [args.platformRegion]
   * @param {function(Error, Match)} done 
   */
  getMatch(args, done) {
    try {
      validate.matchArgs(args, done);      

      var currentPlatformRegion = args.platformRegion
        ? validate.platformRegion(args.platformRegion)
        : this.platformRegion;

      getMatch.getMatch(this.key, currentPlatformRegion, args.matchId, (err, match) => {
        if(err) done(err);
        else done(null, match);
      });
    } catch (err) {
      done(err);
    }
  }

  /**
   * Gets the status of the API.
   * 
   * @param {function(Error, Status)} done 
   */
  getStatus(done) {
    getStatus.getStatus((err, status) => {
      if(err) done (err);
      else done(null, status);
    });
  }
};
