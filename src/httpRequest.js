const request = require('request');
const https = require('https');
const format = require('./format');

const applicationType = 'application/vnd.api+json';

/**
 * Calls the PUBG API and returns the JSON object.
 * 
 * @param {string} key 
 * @param {string} path 
 * @param {function(Error, object)} done 
 */
exports.get = (key, path, done) => {
  var options = {
    hostname: 'api.playbattlegrounds.com',
    path: path,
    method: 'GET',
    headers: {
      'authorization': 'Bearer ' + key,
      'accept': applicationType
    }
  };

  const req = https.request(options, (res) => {
    var output = '';
    res.on('data', (chunk) => {
      output += chunk;
    });

    res.on('end', () => {
      if (res.statusCode !== 200) {
        var parsedError = JSON.parse(output).errors[0];
        format.error(res.statusCode, parsedError, (error) => {
          done(error);
        });
      }
      var data = JSON.parse(output);
      done(null, data);
    });

    res.on('error', (e) => {
      done(e);
    });
  });
  
  req.end();
};