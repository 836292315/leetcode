/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let result = 0,
        count = minutesToTest / minutesToDie + 1;
    while (Math.pow(count, result) < buckets) {
        result++;
    }
    return result;
};