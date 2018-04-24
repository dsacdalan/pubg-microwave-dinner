const httpRequest = require('./httpRequest');
const parse = require('./parse');

// eslint-disable-next-line no-unused-vars
var Status = require('./class/status/status');

/**
 * Gets a single match from an ID and Platform Region.
 * 
 * @param {function(Error, Status)} done 
 */
exports.getStatus = (done) => {
  var path = '/status';
  httpRequest.get(null, path, (err, data) => {
    if (err) {
      done(err);
    } else {
      parse.status(data, (err, status) => {
        if (err) done(err);
        else done(null, status);
      });
    }
  });
};
