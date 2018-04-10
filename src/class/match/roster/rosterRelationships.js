var Reference = require('../../shared/reference');

module.exports = class RosterRelationships {
  constructor(data) {
    this.participants = data.participants.data.map(m => new Reference(m.type, m.id));
    this.team = data.team.data;
  }
};

