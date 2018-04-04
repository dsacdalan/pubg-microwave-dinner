const request = require('request');

const format = require('./format');
const index = require('../index');

function formatError(statusCode, body, done) {
  var error = JSON.parse(body).errors[0];
  var message =
    statusCode === 429
      ? 'Too many requests'
      : error.title;
  var detail =
    error.detail
     ? error.detail
     : '';

  error = new Error(message);
  error.statusCode = statusCode;
  error.detail = detail;
  done(error);
}

exports.get = (token, uri, done) => {
  var options = {
    'headers': {
      'authorization': token,
      'accept': 'application/vnd.api+json'
    }
  };

  request.get(uri, options, (err, res, body) => {
    if (err) {
      done(err);
    } else if (res.statusCode !== 200) {
      formatError(res.statusCode, body, (data) => {
        done(data);
      })
    } else {
      var player = format.formatPlayer(body);
      done(null, player)
    }
  })
}