var RosterAttributes = require('./rosterAttributes');
var RosterRelationships = require('./rosterRelationships');

module.exports = class Roster {
  constructor(data) {
    this.id = data.id;
    this.attributes = new RosterAttributes(data.attributes);
    this.relationships = new RosterRelationships(data.relationships);
  }
};