var LogItem = require('./logItem');

module.exports = class LogItemDrop extends LogItem {
  constructor(data) {
    super(data.character, data.item);
  }
};