module.exports = class RosterAttributeStats {
  constructor(data) {
    this.rank = data.rank;
    this.teamId = data.teamId;
    this.won = data.won;
  }
};