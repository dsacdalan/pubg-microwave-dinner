var RosterAttributeStats = require('./rosterAttributesStats');

module.exports = class RosterAttributes{
  constructor(data) {
    this.shardId = data.shardId;
    this.stats = new RosterAttributeStats(data.stats);
    this.won = data.won;
  }
};