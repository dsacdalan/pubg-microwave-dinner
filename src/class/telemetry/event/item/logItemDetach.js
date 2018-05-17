var LogItemParentChild = require('./logItemParentChild');

module.exports = class LogItemDetach extends LogItemParentChild {
  constructor(data) {
    super(data.character, data.parentItem, data.childItem);
  }
};