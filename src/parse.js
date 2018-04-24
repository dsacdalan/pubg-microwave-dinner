var Player = require('./class/player/player');
var Match = require('./class/match/match');
var Status = require('./class/status/status');

/**
 * Formats a player JSON string object to a Player object.
 * 
 * @param {object} data 
 * @param {function(Error, Player)} done
 */
exports.player = (data, done) => {
  try {
    var player = new Player(data.data);
    done(null, player);
  }
  catch (err) {
    done(err);
  }
};

/**
 * Formtas a player JSON string array object to a Player[].
 * 
 * @param {object} data 
 * @param {function(Error, Player[])} done 
 */
exports.players = (data, done) => {
  try {
    var players = data.data.map(n => new Player(n));
    done(null, players);
  }
  catch(err) {
    done(err);
  }
};

/**
 * Formats a match JSON string object to a Match object.
 * 
 * @param {object} data 
 * @param {function(Error, Match)} done 
 */
exports.match = (data, done) => {
  try {
    var match = new Match(data);
    done(null, match);
  }
  catch(err) {
    done(err);
  }
};

/**
 * Formats a status JSON string object to a Status object.
 * 
 * @param {object} data 
 * @param {function(Error, Status)} done 
 */
exports.status = (data, done) => {
  try {
    var status = new Status(data);
    done(null, status);
  }
  catch (err) {
    done(err);
  }
};
