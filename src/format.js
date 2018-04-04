var Player = require('./class/player');

const baseURL = 'https://api.playbattlegrounds.com/shards/';
const platformRegionList = ['xbox-as','xbox-eu','xbox-na','xbox-oc','pc-krjp','pc-na','pc-eu','pc-oc','pc-kakao','pc-sea','pc-sa','pc-as'];

/**
 * Validates that the Platform Region is correct, and defaults to pc-na if it is not.
 *
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 */
exports.platformRegion = (platformRegion) => {
  if (platformRegionList.includes(platformRegion)) return platformRegion;
  else return 'pc-na';
};

/**
 * Formats a player JSON string object to a Player object.
 * 
 * @param {JSON} body 
 * @param {function(Player)} done
 */
exports.player = (body, done) => {
  var data = JSON.parse(body).data;
  var player = new Player(data);
  done(player);
};

/**
 * Formats the full URI from the Platform Region and endpoint.
 * 
 * @param {string} platformRegion 
 * @param {string} endpoint 
 */
exports.fullURI = (platformRegion, endpoint) => {
  return baseURL + platformRegion + endpoint;
};

/**
 * Formats HTTP errors.
 * 
 * @param {number} statusCode 
 * @param {JSON} body 
 * @param {function(Error)} done 
 */
exports.error = (statusCode, body, done) => {
  var error = JSON.parse(body).errors[0];
  var message =
    statusCode === 429
      ? 'Too many requests'
      : error.title;
  var detail =
    error.detail
      ? error.detail
      : '';

  error = new Error(message);
  error.statusCode = statusCode;
  error.detail = detail;
  done(error);
};