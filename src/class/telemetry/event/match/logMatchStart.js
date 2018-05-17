var LogMatch = require('./logMatch');

module.exports = class LogMatchStart extends LogMatch {
  constructor(data) {
    super(data.characters);
  }
};