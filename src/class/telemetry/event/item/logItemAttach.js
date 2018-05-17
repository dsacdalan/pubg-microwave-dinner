var LogItemParentChild = require('./logItemParentChild');

module.exports = class LogItemAttach extends LogItemParentChild {
  constructor(data) {
    super(data.character, data.parentItem, data.childItem);
  }
};