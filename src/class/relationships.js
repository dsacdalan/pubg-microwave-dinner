var Match = require('./match');

module.exports = class Relationships {
  constructor(data) {
    this.assets = data.assets;
    this.matches = data.matches.data.map(m => new Match(m));
  }
};