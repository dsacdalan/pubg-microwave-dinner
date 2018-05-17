module.exports = class LogVehicleDestroy {
  constructor(data) {
    this.attackId = data.attackId;
    this.attacker = data.attacker;
    this.vehicle = data.vehicle;
    this.damageTypeCategory = data.damageTypeCategory;
    this.damageCauserName = data.damageCauserName;
    this.distance = data.distance;
  }
};