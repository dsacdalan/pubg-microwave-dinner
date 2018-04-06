const getPlayer = require('./getPlayer');
const validate = require('./validate');

const Player = require('./class/player');

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
    }

    this.key = key;
    this.platformRegion = validate.platformRegion(platformRegion);
  }

  /**
   * Gets a single player from an ID and Platform Region.
   * 
   * @param {object} args 
   * @param {string} [args.platformRegion] - Defaults to the client's default Platform Region.
   * @param {string} args.id
   * @param {function(Error, Player)} done 
   */
  getSinglePlayer(args, done)  {

    if (typeof args.id !== 'string' || (args.platformRegion !== undefined && typeof args.platformRegion !== 'string')) {
      throw new Error('The function getSinglePlayer requires the id and platform region to be of type string.');
    }

    var currentPlatformRegion = args.platformRegion
      ? args.platformRegion
      : this.platformRegion;

    getPlayer.getSinglePlayer(this.key, currentPlatformRegion, args.id, (err, player) => {
      if(err) done(err);
      else done(null, player);
    });
  }
};