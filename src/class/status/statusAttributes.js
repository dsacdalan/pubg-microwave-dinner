module.exports = class StatusAttributes {
  constructor(data) {
    this.releasedAt = new Date(data.releasedAt);
    this.version = data.version;
  }
};