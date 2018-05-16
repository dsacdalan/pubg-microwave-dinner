module.exports = class Vehicle {
  constructor(data) {
    this.vehicleType = data.vehicleType;
    this.vehicleId = data.vehicleId;
    this.healthPercent = data.healthPercent;
    // TODO: Misspelling in offical documentation, confirm that this is the correct prop
    this.feulPercent = data.feulPercent;
  }
};