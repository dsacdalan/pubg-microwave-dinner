const format = require('./format');
const validate = require('./validate');

const httpRequest = require('./httpRequest');
var Player = require('./class/player');

/**
 * Gets a single player from an ID and Platform Region.
 * 
 * @param {string} token 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string} id - The player id.
 * @param {function(Error, Player)} done - The callback that handles the response.
 */
exports.getSinglePlayer = (token, platformRegion, id, done) => {
  // Validate platform region and default to pc-na if necessary.
  var validatedPlatformRegion = validate.platformRegion(platformRegion);
  
  var endpoint = '/players/' + id;
  var uri = format.fullURI(validatedPlatformRegion, endpoint);

  httpRequest.get(token, uri, (err, data) => {
    if (err) {
      done(err);
    } else {
      format.player(data, player => {
        done(null, player);
      });
    }
  });
};

/**
 * 
 * @param {string} token 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string[]} ids 
 * @param {string[]} names 
 * @param {*} done 
 */
exports.getPlayers = (token, platformRegion, ids, names, done) => {
  
  // Validate platform region and default to pc-na if necessary.
  var validatedPlatformRegion = validate.platformRegion(platformRegion);

  format.playersEndpoint(ids, names, (data) => {
    var endpoint = '/players/' + data;
    var uri = format.fullURI(validatedPlatformRegion, endpoint);

    httpRequest.get(token, uri, (err, data) => {
      if (err) {
        done(err);
      } else {
        // TODO: format Player list
        done(null, data);
      }
    });
  });
};