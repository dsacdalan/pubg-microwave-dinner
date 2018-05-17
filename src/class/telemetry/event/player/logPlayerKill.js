module.exports = class LogPlayerKill {
  constructor(data) {
    this.attackId = data.attackId;
    this.killer = data.killer;
    this.victim = data.victim;
    this.damageTypeCategory = data.damageTypeCategory;
    this.damageCauserName = data.damageCauserName;
    this.distance = data.distance;
  } 
};