/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let len = prices.length,
        hold = -prices[0],
        release = 0;

    for (let i = 1; i < len; i++) {
        hold = Math.max(hold, release - prices[i]);
        release = Math.max(release, hold + prices[i] - fee);
    }
    return release;
};