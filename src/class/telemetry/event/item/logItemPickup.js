var LogItem = require('./logItem');

module.exports = class LogItemPickup extends LogItem {
  constructor(data) {
    super(data.character, data.item);
  }
};