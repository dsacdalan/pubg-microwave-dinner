module.exports = class MatchAttributes {
  constructor(data) {
    this.createdAt = new Date(data.createdAt);
    this.duration = parseInt(data.duration);
    this.gameMode = data.gameMode;
    this.mapName = data.mapName;
    this.patchVersion = data.patchVersion;
    this.shardId = data.shardId;
    this.stats = data.stats;
    this.tags = data.tags;
    this.titleId = data.titleId;
  }
};