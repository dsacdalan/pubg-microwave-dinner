var MatchData = require('./data/matchData');
var Roster = require('./roster/roster');
var Participant = require('./participant/participant');
var Asset = require('./asset/asset');
var Links = require('../shared/links');

/**
 * @property {(Roster|Participant|Asset)} included
 */
module.exports = class Match {
  constructor(data) {
    this.data = new MatchData(data.data);
    this.included = includeArray(data.included);
    this.links = new Links(data.links);
  }
};

function includeArray(data) {
  var includeArray = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].type === 'roster') {
      includeArray.push(new Roster(data[i]));
    } else if (data[i].type === 'participant') {
      includeArray.push(new Participant(data[i]));
    } else if (data[i].type === 'asset') {
      includeArray.push(new Asset(data[i]));
    }
  }

  return includeArray;
}