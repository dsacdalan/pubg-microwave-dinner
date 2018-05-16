module.exports = class GameState {
  constructor(data) {
    this.elapsedTime = data.elapsedTime;
    this.numAliveTeams = data.numAliveTeams;
    this.numJoinPlayers = data.numJoinPlayers;
    this.numStartPlayers = data.numStartPlayers;
    this.numAlivePlayers = data.numAlivePlayers;
    this.safetyZonePosition = data.safetyZonePosition;
    this.safetyZoneRadius = data.safetyZoneRadius;
    this.poisonGasWarningPosition = data.poisonGasWarningPosition;
    this.poisonGasWarningRadius = data.poisonGasWarningRadius;
    this.redZonePosition = data.redZonePosition;
    this.redZoneRadius = data.redZoneRadius;
  }
};