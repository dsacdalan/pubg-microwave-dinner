module.exports = class Item {
  constructor(data) {
    this.itemId = data.itemId;
    this.stackCount = data.stackCount;
    this.category = data.category;
    this.attachedItems = data.attachedItems;
  }
};