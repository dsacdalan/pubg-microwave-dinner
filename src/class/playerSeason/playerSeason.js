const PlayerSeasonAttributes = require('./playerSeasonAttributes');
const PlayerSeasonRelationships = require('./playerSeasonRelationships');

module.exports = class PlayerSeason {
  constructor(data) {
    this.type = data.data.type;
    this.attributes = new PlayerSeasonAttributes(data.data.attributes);
    this.relationships = new PlayerSeasonRelationships(data.data.relationships);
    this.links = {
      self: data.links.self
    };
    this.meta = data.meta;
  }
};