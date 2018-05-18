module.exports = class SeasonAttributes {
  constructor(data) {
    this.isCurrentSeason = data.isCurrentSeason;
    this.isOffseason = data.isOffseason;
  }
};