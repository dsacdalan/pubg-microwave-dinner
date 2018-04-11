var Player = require('./class/player/player');
var Match = require('./class/match/match');

const parseMessage = 'Data could not be parsed.';

/**
 * Formats a player JSON string object to a Player object.
 * 
 * @param {object} data 
 * @param {function(Player)} done
 */
exports.player = (data, done) => {
  try {
    var player = new Player(data.data);
    done(player);
  }
  catch (err) {
    throw new Error(parseMessage);
  }
};

/**
 * Formtas a player JSON string array object to a Player[].
 * 
 * @param {object} data 
 * @param {function(Player[])} done 
 */
exports.players = (data, done) => {
  var players = data.data.map(n => new Player(n));
  done(players);
};

/**
 * Formats a match JSON string object to a Match object.
 * 
 * @param {object} data 
 * @param {function(Match)} done 
 */
exports.match = (data, done) => {
  try {
    var match = new Match(data);
    done(match);
  }
  catch(err) {
    throw new Error(parseMessage);
  }
};
