var Reference = require('../shared/reference');
var SeasonAttributes = require('./seasonAttributes');

module.exports = class Season extends Reference {
  constructor(data) {
    super(data.type, data.id);
    this.attributes = new SeasonAttributes(data.attributes);
  }
};