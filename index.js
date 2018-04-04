const getPlayer = require('./src/getPlayer');

var token = '';

function setToken(yourToken) {
  token = yourToken;
}

function getToken() {
  return token;
}

function getSinglePlayer(platformRegion, id, done) {
  getPlayer.getSinglePlayer(getToken(), platformRegion, id, (err, data) => {
    if (err) done(err);
    else done(null, data);
  })
};

module.exports = {
  getSinglePlayer,
  setToken
}