module.exports = class ParticipantStats {
  constructor(data) {
    this.DBNOs = parseInt(data.DBNOs);
    this.assists = parseInt(data.assists);
    this.boosts = parseInt(data.boosts);
    this.damageDealt = parseInt(data.damageDealt);
    this.deathType = data.deathType;
    this.headshotKills = parseInt(data.headshotKills);
    this.heals = parseInt(data.heals);
    this.killPlace = parseInt(data.killPlace);
    this.killPointsDelta = data.killPointsDelta;
    this.killStreaks = parseInt(data.killStreaks);
    this.kills = parseInt(data.kills);
    this.lastKillPoints = parseInt(data.lastKillPoints);
    this.lastWinPoints = parseInt(data.lastWinPoints);
    this.longestKill = data.longestKill;
    this.mostDamage = data.mostDamage;
    this.name = data.name;
    this.playerId = data.playerId;
    this.revives = parseInt(data.revives);
    this.rideDistance = data.rideDistance;
    this.roadKills = parseInt(data.roadKills);
    this.teamKills = parseInt(data.teamKills);
    this.timeSurvived = data.timeSurvived;
    this.vehicleDestorys = parseInt(data.vehicleDestorys);
    this.walkDistance = data.walkDistance;
    this.weaponsAcquired = parseInt(data.weaponsAcquired);
    this.winPlace = parseInt(data.winPlace);
    this.winPointsDelta = data.winPointsDelta;
  }
};