var Reference = require('../../shared/reference');
var ParticipantAttributes = require('./participantAttributes');

module.exports = class Participant extends Reference {
  constructor(data) {
    super(data.type, data.id);
    this.attributes = new ParticipantAttributes(data.attributes);
  }
};