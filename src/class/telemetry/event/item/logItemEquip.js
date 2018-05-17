var LogItem = require('./logItem');

module.exports = class LogItemEquip extends LogItem {
  constructor(data) {
    super(data.character, data.item);
  }
};