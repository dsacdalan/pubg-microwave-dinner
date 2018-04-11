const format = require('./format');
const parse = require('./parse');
const httpRequest = require('./httpRequest');

// eslint-disable-next-line no-unused-vars
var Player = require('./class/player/player');

/**
 * Gets a single player.
 * 
 * @param {string} key 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string} id - The player id.
 * @param {function(Error, Player)} done - The callback that handles the response.
 */
exports.getSinglePlayer = (key, platformRegion, id, done) => {
  var endpointPath = '/players/' + id;
  var path = format.path(platformRegion, endpointPath);

  httpRequest.get(key, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      try {
        parse.player(data, player => {
          done(null, player);
        });
      } catch (err) {
        done(err);
      }
    }
  });
};

/**
 * 
 * Gets a list of players.
 * 
 * @param {string} key 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string[]} ids 
 * @param {string[]} names 
 * @param {function(error, Player[])} done 
 */
exports.getPlayers = (key, platformRegion, ids, names, done) => {
  format.playersEndpoint(ids, names, (data) => {
    var endpointPath = '/players' + data;
    var path = format.path(platformRegion, endpointPath);

    httpRequest.get(key, path, (err, data) => {
      if (err) {
        done(err);
      } else {
        try {
          parse.players(data, players => {
            done(null, players);
          });
        } catch (err) {
          done(err);
        }
      }
    });
  });
};