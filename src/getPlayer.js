const request = require('request');

const format = require('./format');
const httpRequest = require('./httpRequest');
var Player = require('./class/player');

/**
 * Gets a single player by their ID and Platform Region.
 * @param {String} platformRegion 
 * @param {String} id 
 * @param {function(Error, Player)} done - The callback that handles the response.
 */
exports.getSinglePlayer = (token, platformRegion, id, done) => {
  // Default Platform Region to PC-NA if none is provided
  platformRegion = platformRegion
    ? platformRegion
    : 'pc-na'
  
  var endpoint = '/players/' + id;
  var uri = format.fullURI(platformRegion, endpoint);

  httpRequest.get(token, uri, (err, data) => {
    if (err) {
      done(err);
    }
    else {
      done(null, data);
    }
  });
}