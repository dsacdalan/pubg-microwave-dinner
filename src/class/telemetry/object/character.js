module.exports = class Character {
  constructor(data) {
    this.name = data.name;
    this.teamId = data.teamId;
    this.health = data.health;
    this.location = data.location;
    this.ranking = data.ranking;
    this.accountId = data.accountId;
  }
};