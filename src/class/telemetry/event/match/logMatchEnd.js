var LogMatch = require('./logMatch');

module.exports = class LogMatchEnd extends LogMatch {
  constructor(data) {
    super(data.characters);
  }
};