const gameModeStat = require('./gameModeStat');

module.exports = class GameModeStats {
  constructor(data){
    this.duo = new gameModeStat(data.duo);
    this.duo_fpp = new gameModeStat(data['duo-fpp']);
    this.solo = new gameModeStat(data.solo);
    this.solo_fpp = new gameModeStat(data['solo-fpp']);
    this.squad = new gameModeStat(data.squad);
    this.squad_fpp = new gameModeStat(data['squad-fpp']);
  }
};