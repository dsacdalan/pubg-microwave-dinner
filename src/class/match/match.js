var MatchAttributes = require('./matchAttributes');
var MatchRelationships = require('./matchRelationships');
var Links = require('../shared/links');

module.exports = class Match {
  constructor(data) {
    this.type = data.type;
    this.id = data.id;
    this.attributes = new MatchAttributes(data.attributes);
    this.relationships = new MatchRelationships(data.relationships);
    this.links = new Links(data.links);
  }
};