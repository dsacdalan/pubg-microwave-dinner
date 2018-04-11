const platformRegionList = ['xbox-as','xbox-eu','xbox-na','xbox-oc','pc-krjp','pc-na','pc-eu','pc-oc','pc-kakao','pc-sea','pc-sa','pc-as'];

/**
 * Validates that the Platform Region is valid, and defaults to pc-na if it is not.
 *
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 */
exports.platformRegion = (platformRegion) => {
  if (platformRegionList.includes(platformRegion)) {
    return platformRegion;
  } else {
    throw new Error('Invalid platform region');
  } 
};

/**
 * Validates the arguments for Client.getPlayer.
 * 
 * @param {object} args 
 * @param {string} args.playerId
 * @param {string} [args.platformRegion]
 */
exports.playerArgs = (args) => {
  argumentString(args.platformRegion, 'getPlayer', 'playerId');
  if(args.playerId === undefined || typeof args.playerId !== 'string') {
    throw new Error('The function getPlayers requires a playerId of type string.');
  }
};

/**
 * Validates the arguments for Client.getPlayers.
 * 
 * @param {object} args 
 * @param {string[]} [args.playerIds]
 * @param {string[]} [args.playerNames]
 * @param {string} [args.platformRegion]
 */
exports.playersArgs = (args) => {
  argumentString(args.platformRegion, 'getPlayers', 'platformRegion');
  argumentArray(args.playerIds, 'getPlayers', 'playerIds');
  argumentArray(args.playerNames, 'getPlayers', 'playerNames');
};

/**
 * Validates the arguments for Client.getMatch
 * 
 * @param {object} args 
 * @param {string} args.matchId
 * @param {string} [args.platformRegion]
 */
exports.matchArgs = (args) => {
  var functionName = 'getMatch';
  argumentString(args.matchId, functionName, 'matchId');
  argumentString(args.platformRegion, functionName, 'platformRegion');
};

/**
 * Helper function that validates that an argument is of type string.
 * 
 * @param {any} platformRegion 
 * @param {string} functionName
 * @param {string} argName
 */
function argumentString(arg, functionName, argName) {
  if(arg !== undefined && typeof arg !== 'string') {
    throw new Error('The function ' + functionName + ' requires a ' + argName + ' of type string.'); } 
}

/**
 * Helper function that validates that an argument is of type string[].
 * 
 * @param {any} arg 
 * @param {string} functionName 
 * @param {string} argName 
 */
function argumentArray(arg, functionName, argName) {
  if(arg !== undefined && !Array.isArray(arg)) {
    throw new Error('The function' + functionName + ' requires a ' + argName + ' of type array.');
  }
}