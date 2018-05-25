const Reference = require('../shared/reference');

module.exports = class GameModeAttributes {
  constructor(data) {
    this.player = new Reference(data.player.data.type, data.player.data.id);
    this.matchesSolo = new Reference(data.matchesSolo.data.type, data.matchesSolo.data.id);
    this.matchesSoloFPP = new Reference(data.matchesSoloFPP.data.type, data.matchesSoloFPP.data.id);
    this.matchesDuo = new Reference(data.matchesDuo.data.type, data.matchesDuo.data.id);
    this.matchesDuoFPP = new Reference(data.matchesDuoFPP.data.type, data.matchesDuoFPP.data.id);
    this.matchesSquad = new Reference(data.matchesSquad.data.type, data.matchesSquad.data.id);
    this.matchesSquadFPP = new Reference(data.matchesSquadFPP.data.type, data.matchesSquadFPP.data.id);
    this.season = new Reference(data.season.data.type, data.season.data.id);
  }
};