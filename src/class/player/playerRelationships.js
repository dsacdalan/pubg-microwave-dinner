var Reference = require('../shared/reference');

module.exports = class PlayerRelationships {
  constructor(data) {
    this.assets = data.assets;
    this.matches = data.matches.data.map(m => new Reference(m.type, m.id));
  }
};