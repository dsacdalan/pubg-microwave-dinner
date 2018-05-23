const format = require('./format');
const parse = require('./parse');
const httpRequest = require('./httpRequest');

// eslint-disable-next-line no-unused-vars
var Match = require('./class/match/match');

/**
 * Gets a single match from an ID and Platform Region.
 *  
 * @param {string} platformRegion 
 * @param {string} id 
 * @param {function(Error, Match)} done 
 */
exports.getMatch = (platformRegion, id, done) => {
  var path = format.path(platformRegion, '/matches/', id);

  httpRequest.get(null, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      parse.match(data, (err, match) => {
        if (err) done(err);
        else done(null, match);
      });
    }
  });
};


/**
 * Filters specific include objects from a match.
 * 
 * @param {Match} match 
 * @param {string[]} filter - Options: roster, participant, asset
 * @param {function(Error, object[])} done 
 */
exports.filterMatchIncludes = (match, filter, done) => {
  
  // TODO: Validate filter

  done(null, match.included.filter(type => filter.includes(type)));
};
