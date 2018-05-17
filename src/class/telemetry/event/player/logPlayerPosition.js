module.exports = class LogPlayerPosition {
  constructor(data) {
    this.character = data.character;
    this.elapsedTime = data.elapsedTime;
    this.numAlivePlayers = data.numAlivePlayers;
  }
};