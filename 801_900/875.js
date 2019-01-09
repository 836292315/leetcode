/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    let lo = 1;
    let hi = 1000000000;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let sum = 0;
        for (let p of piles) {
            sum += Math.ceil(p / mid);
        }
        if (sum > H) {
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    return lo;
};
