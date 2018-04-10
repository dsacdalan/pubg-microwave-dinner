const format = require('./format');
const validate = require('./validate');
const httpRequest = require('./httpRequest');

// eslint-disable-next-line no-unused-vars
var Player = require('./class/player/player');

/**
 * Gets a single player from an ID and Platform Region.
 * 
 * @param {string} key 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string} id - The player id.
 * @param {function(Error, Player)} done - The callback that handles the response.
 */
exports.getSinglePlayer = (key, platformRegion, id, done) => {
  var endpoint = '/players/' + id;
  var uri = format.fullURI(platformRegion, endpoint);

  httpRequest.get(key, uri, (err, data) => {
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
  format.playersEndpoint(ids, names, (data) => {
    var endpoint = '/players/' + data;
    var uri = format.fullURI(platformRegion, endpoint);

    httpRequest.get(token, uri, (err, data) => {
      if (err) {
        done(err);
      } else {
        format.players(data, players => {
          done(null, players);
        });
      }
    });
  });
};