var Match = require('./match');

module.exports = class Relationships {
  constructor(data) {
    this.assets = {
      'data': {}
    };

    var matchArray = new Array();
    for (var i = 0; i < data.matches.data.length; i++){
      matchArray.push(new Match(data.matches.data[i]));
    }

    this.matches = {
      'data': matchArray
    };
  }
};