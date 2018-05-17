var LogCarePackage = require('./logCarePackage');

module.exports = class LogCarePackageLand extends LogCarePackage{
  constructor(data) {
    super(data.itemPackage);
  }
};