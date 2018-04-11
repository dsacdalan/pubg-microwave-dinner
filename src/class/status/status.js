var Reference = require('../shared/reference');
var StatusAttributes = require('./statusAttributes');

module.exports = class Status extends Reference{
  constructor(data) {
    super(data.data.type, data.data.id);
    this.attributes = new StatusAttributes(data.data.attributes);
  }
};