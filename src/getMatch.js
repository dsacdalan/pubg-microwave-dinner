const format = require('./format');
const parse = require('./parse');
const httpRequest = require('./httpRequest');

// eslint-disable-next-line no-unused-vars
var Match = require('./class/match/match');

/**
 * Gets a single match from an ID and Platform Region.
 * 
 * @param {string} key 
 * @param {string} platformRegion 
 * @param {string} id 
 * @param {function(Error, Match)} done 
 */
exports.getMatch = (key, platformRegion, id, done) => {
  var endpointPath = '/matches/' + id;
  var path = format.path(platformRegion, endpointPath);

  httpRequest.get(key, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      try {
        parse.match(data, match => {
          done(null, match);
        });
      } catch (err) {
        done(err);
      }
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
  
  // Validate filter

  done(match.included.filter(type => filter.includes(type)));
};