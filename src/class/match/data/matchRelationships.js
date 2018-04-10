var Reference = require('../../shared/reference');

module.exports = class MatchRelationships {
  constructor(data) {
    this.assets = {
      data: data.assets.data.map(m => new Reference(m.type, m.id))
    };
    this.rosters = {
      data: data.rosters.data.map(m => new Reference(m.type, m.id))
    };
    this.rounds = data.rounds.data;
    this.spectators = data.spectators.data;
  }
};