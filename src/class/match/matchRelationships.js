var Assets = require('./assets');
var Rosters = require('./rosters');

module.exports = class MatchRelationships {
  constructor(data) {
    this.assets = {
      data: data.assets.data.map(m => new Assets(m))
    };
    this.rosters = {
      data: data.rosters.data.map(m => new Rosters(m))
    };
    this.rounds = data.rounds.data;
    this.spectators = data.spectators.data;
  }
};