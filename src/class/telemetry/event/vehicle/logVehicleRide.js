var LogVehicle = require('./logVehicle');

module.exports = class LogVehicleRide extends LogVehicle{
  constructor(data) {
    super(data.character, data.vehicle);
  }
};