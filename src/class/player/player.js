var PlayerAttributes = require('./playerAttributes');
var PlayerRelationships = require('./playerRelationships');
var Links = require('../shared/links');

module.exports = class Player {
  constructor(data) {
    this.type = data.type;
    this.id = data.id;
    this.attributes = new PlayerAttributes(data.attributes);
    this.relationships = new PlayerRelationships(data.relationships);
    this.links = new Links(data.links);
  }
};