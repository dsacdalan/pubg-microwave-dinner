const format = require('./format');
const validate = require('./validate');
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

  var endpoint = '/matches/' + id;
  var uri = format.fullURI(platformRegion, endpoint);

  httpRequest.get(key, uri, (err, data) => {
    if (err) {
      done(err);
    } else {
      format.match(data, match => {
        done(null, match);
      });
    }
  });

};