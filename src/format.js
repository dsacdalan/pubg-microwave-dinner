var Player = require('./class/player');

const baseURL = 'https://api.playbattlegrounds.com/shards/';
const comma = '%2C'

/**
 * Formats a player JSON string object to a Player object.
 * @param {JSON} body 
 */
exports.formatPlayer = (body) => {
  var data = JSON.parse(body).data;
  var player = new Player(data);
  return player;
}

/**
 * Formats the full URI from the Platform Region and endpoint.
 * @param {string} platformRegion 
 * @param {string} endpoint 
 */
exports.fullURI = (platformRegion, endpoint) => {
  return baseURL + platformRegion + endpoint;
}