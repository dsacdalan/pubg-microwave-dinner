var ParticipantStats = require('./participantStats');

module.exports = class ParticipantAttributes {
  constructor(data) {
    this.actor = data.actor;
    this.shardId = data.shardId;
    this.stats = new ParticipantStats(data.stats);
  }
};