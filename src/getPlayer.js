const format = require('./format');
const parse = require('./parse');
const httpRequest = require('./httpRequest');

// eslint-disable-next-line no-unused-vars
var Player = require('./class/player/player');
// eslint-disable-next-line no-unused-vars
var PlayerSeason = require('./class/playerSeason/playerSeason');

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
  var path = format.path(platformRegion, '/players/', id);

  httpRequest.get(key, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      parse.player(data, (err, player) => {
        if (err) done(err);
        else done(null, player);
      });
    }
  });
};

/**
 * Gets season information for a single player.
 * 
 * @param {string} key 
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 * @param {string} playerId - The player id.
 * @param {string} seasonId - The season id.
 * @param {function(Error, PlayerSeason)} done - The callback that handles the response.
 */
exports.getPlayerSeason = (key, platformRegion, playerId, seasonId, done) => {
  var options = playerId + '/seasons/' + seasonId;
  var path = format.path(platformRegion, '/players/', options);

  httpRequest.get(key, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      parse.playerSeason(data, (err, playerSeason) => {
        if (err) done(err);
        else done(null, playerSeason);
      });
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
 * @param {function(Error, Player[])} done 
 */
exports.getPlayers = (key, platformRegion, ids, names, done) => {
  format.playersEndpoint(ids, names, (data) => {
    var path = format.path(platformRegion, '/players', data);

    httpRequest.get(key, path, (err, data) => {
      if (err) {
        done(err);
      } else {
        parse.players(data, (err, players) => {
          if (err) done(err);
          else done(null, players);
        });
      }
    });
  });
};
