/**
 * Formats the full path for an enpoint.
 * 
 * @param {string} platformRegion 
 * @param {string} path 
 * @param {string} [options]
 */
exports.path = (platformRegion, path, options) => {
  if (options) {
    return '/shards/' + platformRegion + path + options;
  } else {
    return '/shards/' + platformRegion + path;
  }
};

/**
 * Formats API HTTP errors.
 * 
 * @param {number} statusCode 
 * @param {object} error 
 * @param {function(Error)} done 
 */
exports.error = (statusCode, error, done) => {
  var message =
    statusCode === 429
      ? 'Too many requests'
      : error.title;
  var detail =
    error.detail
      ? error.detail
      : '';

  error = new Error(message);
  error.statusCode = statusCode;
  error.detail = detail;
  done(error);
};

/**
 * Formats the Players endpoint.
 * Defaults to the empty string if no ids or names are provided.
 * 
 * @param {string[]} ids 
 * @param {string[]} names 
 * @param {function(string)} done
 */
exports.playersEndpoint = (ids, names, done) => {
  if(ids) {
    // IDs
    var idList = ids.join(',');
    var idFilter = '?filter[playerIds]=';
    if (names) {
      // IDs and Names
      var nameList = names.join(',');

      done(idFilter + idList + '&filter[playerNames]=' + nameList);
    } else {
      // IDs only
      done(idFilter + idList);
    }

  } else if (names) {
    // Names only
    var onlyNameList = names.join(',');
    done('?filter[playerNames]=' + onlyNameList);
  } else {
    // No filter
    done('');
  }
};
