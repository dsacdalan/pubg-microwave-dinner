const httpRequest = require('./httpRequest');
const parse = require('./parse');
const format = require('./format');

// eslint-disable-next-line no-unused-vars
var Season = require('./class/season/season');

/**
 * Gets a single match from an ID and Platform Region.
 * @param {string} key
 * @param {string} playformRegion
 * @param {function(Error, Season)} done 
 */
exports.getSeasons = (key, platformRegion, done) => {
  var path = format.path(platformRegion, '/seasons');
  httpRequest.get(key, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      parse.seasons(data, (err, season) => {
        if (err) done(err);
        else done(null, season);
      });
    }
  });
};
