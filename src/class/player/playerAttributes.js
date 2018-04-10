module.exports = class PlayerAttributes {
  constructor(data) {
    this.name = data.name;
    this.shardId = data.shardId;
    this.stats = data.stats;
    this.createdAt = new Date(data.createdAt);
    this.patchVersion = data.patchVersion;
    this.titleId = data.titleId;
  }
};