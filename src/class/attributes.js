module.exports = class Attributes {
  constructor(data) {
    this.name = data.name;
    this.shardId = data.shardId;
    this.createdAt = data.createdAt;
    this.patchVersion = data.patchVersion;
    this.titleId = data.titleId;
  }
};