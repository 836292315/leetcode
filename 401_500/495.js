/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    if (timeSeries === null || timeSeries.length === 0) {
        return 0;
    }
    for (let i = 1; i < timeSeries.length; i++) {
        res += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    }
    return res + duration;
};