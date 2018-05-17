module.exports = class LogPlayerTakeDamage {
  constructor(data) {
    this.attackId = data.attackId;
    this.attacker = data.attacker;
    this.victim = data.victim;
    this.damageTypeCategory = data.damageTypeCategory;
    this.damageReason = data.damageReason;
    this.damage = data.damage;
    this.damageCauserName = data.damageCauserName;
  }
};