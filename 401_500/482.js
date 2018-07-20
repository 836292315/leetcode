/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let str = S.replace(/-/g, '').toUpperCase(),
        len = str.length,
        result = [];
    while (len > 0) {
        result.push(str.substring(len - K, len));
        len = len - K;
    }
    return result.reverse().join('-');
};