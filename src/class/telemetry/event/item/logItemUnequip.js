var LogItem = require('./logItem');

module.exports = class LogItemUnequip extends LogItem {
  constructor(data) {
    super(data.character, data.item);
  }
};