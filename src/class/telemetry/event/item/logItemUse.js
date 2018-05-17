var LogItem = require('./logItem');

module.exports = class LogItemUse extends LogItem {
  constructor(data) {
    super(data.character, data.item);
  }
};