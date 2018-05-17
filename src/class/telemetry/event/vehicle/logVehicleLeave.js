var LogVehicle = require('./logVehicle');

module.exports = class LogVehicleLeave extends LogVehicle{
  constructor(data) {
    super(data.character, data.vehicle);
  }
};