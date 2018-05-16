module.exports = class ItemPackage {
  constructor(data) {
    this.itemPackageId = data.itemPackageId;
    this.location = data.location;
    this.items = data.items;
  }
};