module.exports = class GameModeStat {
  constructor(data) {
    this.assists = data.assists;
    this.boosts = data.boosts;
    this.dBNOs = data.dBNOs;
    this.dailyKills = data.dailyKills;
    this.damageDealt = data.damageDealt;
    this.days = data.days;
    this.headshotKills = data.headshotKills;
    this.heals = data.heals;
    this.killPoints = data.killPoints;
    this.kills = data.kills;
    this.longestKills = data.longestKills;
    this.longestTimeSurvived = data.longestTimeSurvived;
    this.losses = data.losses;
    this.maxKillStreaks = data.maxKillStreaks;
    this.mostSurvivalTime = data.mostSurvivalTime;
    this.revives = data.revives;
    this.rideDistance = data.rideDistance;
    this.roadKills = data.roadKills;
    this.roundMostKills = data.roundMostKills;
    this.roundsPlayed = data.roundsPlayed;
    this.suicides = data.suicides;
    this.teamKills = data.teamKills;
    this.timeSurvived = data.timeSurvived;
    this.top10s = data.top10s;
    this.vheicleDestroys = data.vheicleDestroys;
    this.walkDistance = data.walkDistance;
    this.weaponsAcquired = data.weaponsAcquired;
    this.weeklyKills = data.weeklyKills;
    this.winPoints = data.winPoints;
    this.wins = data.wins;
  }
};