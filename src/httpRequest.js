const request = require('request');
const format = require('./format');

const applicationType = 'application/vnd.api+json';

/**
 * Calls the PUBG API and returns the JSON object.
 * 
 * @param {string} token 
 * @param {URL} uri 
 * @param {function(Error, JSON)} done 
 */
exports.get = (token, uri, done) => {
  var options = {
    'headers': {
      'authorization': token,
      'accept': applicationType
    }
  };

  request.get(uri, options, (err, res, body) => {
    if (err) {
      done(err);
    } else if (res.statusCode !== 200) {
      format.error(res.statusCode, body, (error) => {
        done(error);
      });
    } else {
      done(null, body);
    }
  });
};