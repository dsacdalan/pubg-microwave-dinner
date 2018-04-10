var Reference = require('../../shared/reference');
var MatchAttributes = require('./matchAttributes');
var MatchRelationships = require('./matchRelationships');
var Links = require('../../shared/links');

module.exports = class MatchData extends Reference {
  constructor(data) {
    super(data.type, data.id);
    this.attributes = new MatchAttributes(data.attributes);
    this.relationships = new MatchRelationships(data.relationships);
    this.links = new Links(data.links);
  }
};