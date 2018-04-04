const format = require('./format');
const httpRequest = require('./httpRequest');
var Player = require('./class/player');

/**
 * Gets a single player from an ID and Platform Region.
 * @param {String} platformRegion 
 * @param {String} id
 * @param {function(Error, Player)} done - The callback that handles the response.
 */
exports.getSinglePlayer = (token, platformRegion, id, done) => {
  // Default Platform Region to PC-NA if none is provided
  var formattedPlatformRegion = format.platformRegion(platformRegion);
  
  var endpoint = '/players/' + id;
  var uri = format.fullURI(formattedPlatformRegion, endpoint);

  httpRequest.get(token, uri, (err, body) => {
    if (err) {
      done(err);
    } else {
      format.player(body, player => {
        done(null, player);
      });
    }
  });
};