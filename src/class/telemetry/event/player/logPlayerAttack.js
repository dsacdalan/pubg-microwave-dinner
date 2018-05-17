module.exports = class LogPlayerAttack {
  constructor(data) {
    this.attackId = data.attackId;
    this.attacker = data.attacker;
    this.attackType = data.attackType;
    this.weapon = data.weapon;
    this.vehicle = data.vehicle;
  }
};