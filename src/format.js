var Player = require('./class/player');

const baseURL = 'https://api.playbattlegrounds.com/shards/';
const platformRegionList = ['xbox-as','xbox-eu','xbox-na','xbox-oc','pc-krjp','pc-na','pc-eu','pc-oc','pc-kakao','pc-sea','pc-sa','pc-as'];

/**
 * Validates that the Platform Region is correct, and defaults to pc-na if it is not.
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 */
exports.platformRegion = (platformRegion) => {
  var found = platformRegionList.find((element) => {
    return element = platformRegion;
  });

  if (found) return platformRegion;
  else return 'pc-na';
};

/**
 * Formats a player JSON string object to a Player object.
 * @param {JSON} body 
 */
exports.formatPlayer = (body) => {
  var data = JSON.parse(body).data;
  var player = new Player(data);
  return player;
};

/**
 * Formats the full URI from the Platform Region and endpoint.
 * @param {string} platformRegion 
 * @param {string} endpoint 
 */
exports.fullURI = (platformRegion, endpoint) => {
  return baseURL + platformRegion + endpoint;
};