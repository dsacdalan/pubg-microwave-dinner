var Matches = require('./matches');

module.exports = class PlayerRelationships {
  constructor(data) {
    this.assets = data.assets;
    this.matches = data.matches.data.map(m => new Matches(m));
  }
};