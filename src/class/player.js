var Attributes = require('./attributes')
var Relationships = require('./relationships')
var Links = require('./links');

module.exports = class Player {
  constructor(data) {
    this.type = data.type
    this.id = data.id;
    this.attributes = new Attributes(data.attributes)
    this.relationships = new Relationships(data.relationships)
    this.links = new Links(data.links);
  }
}