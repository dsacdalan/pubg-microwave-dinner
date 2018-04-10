const request = require('request');
const format = require('./format');

const applicationType = 'application/vnd.api+json';

/**
 * Calls the PUBG API and returns the JSON object.
 * 
 * @param {string} key 
 * @param {URL} uri 
 * @param {function(Error, object)} done 
 */
exports.get = (key, uri, done) => {
  var options = {
    'headers': {
      'authorization': key,
      'accept': applicationType
    }
  };

  request.get(uri, options, (err, res, body) => {
    if (err) {
      done(err);
    } else if (res.statusCode !== 200) {
      var parsedError = JSON.parse(body).errors[0];
      format.error(res.statusCode, parsedError, (error) => {
        done(error);
      });
    } else {
      var data = JSON.parse(body);
      done(null, data);
    }
  });
};