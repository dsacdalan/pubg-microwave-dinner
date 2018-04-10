module.exports = class AssetAttribute {
  constructor(data) {
    this.url = data.URL;
    this.createdAt = new Date(data.createdAt);
    this.description = data.description;
    this.name = data.name;
  }
};