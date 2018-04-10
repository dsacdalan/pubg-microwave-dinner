var AssetAttribute = require('./assetAttribute');
var Reference = require('../../shared/reference');

module.exports = class Asset extends Reference {
  constructor(data) {
    super(data.type, data.id);
    this.attributes = new AssetAttribute(data.attributes);
  }
};