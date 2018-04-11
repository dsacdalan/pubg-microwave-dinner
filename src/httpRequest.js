const https = require('https');
const format = require('./format');

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
      'accept': 'application/vnd.api+json'
    }
  };
  
  if (key) {
    options.headers.authorization = 'Bearer ' + key;
  }

  const req = https.request(options, (res) => {
    var output = '';
    res.on('data', (chunk) => {
      output += chunk;
    });

    res.on('end', () => {
      if (res.statusCode !== 200) {
        var parsedError = (res.statusCode === 429)
          ? {'title': 'Too many requests'}
          : JSON.parse(output).errors[0];

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