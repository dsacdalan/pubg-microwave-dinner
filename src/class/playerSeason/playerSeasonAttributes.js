const GameModeStats = require('./gameModeStats');

module.exports = class GameModeAttributes {
  constructor(data) {
    this.gameModeStats = new GameModeStats(data.gameModeStats);
  }
};