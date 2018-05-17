var LogCarePackage = require('./logCarePackage');

module.exports = class LogCarePackageSpawn extends LogCarePackage{
  constructor(data) {
    super(data.itemPackage);
  }
};