const platformRegionList = ['xbox-as','xbox-eu','xbox-na','xbox-oc','pc-krjp','pc-na','pc-eu','pc-oc','pc-kakao','pc-sea','pc-sa','pc-as'];

/**
 * Validates that the Platform Region is correct, and defaults to pc-na if it is not.
 *
 * @param {string} platformRegion - One of the following:
 * xbox-as, xbox-eu, xbox-na, xbox-oc,
 * pc-krjp, pc-na, pc-eu, pc-oc, pc-kakao, pc-sea, pc-sa, or pc-as.
 */
exports.platformRegion = (platformRegion) => {
  
  if(platformRegion === undefined) {
    return 'pc-na';
  } else if (platformRegionList.includes(platformRegion)) {
    return platformRegion;
  } else {
    throw new Error('Invalid platform region');
  } 
};