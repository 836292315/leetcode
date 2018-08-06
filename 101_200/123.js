/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold1 = -Infinity,
        hold2 = -Infinity;
    let release1 = 0,
        release2 = 0;
    for (let i = 0; i < prices.length; i++) {
        hold1 = Math.max(hold1, -prices[i]);
        release1 = Math.max(release1, hold1 + prices[i]);
        hold2 = Math.max(hold2, release1 - prices[i]);
        release2 = Math.max(release2, hold2 + prices[i]);
    }
    return release2;
};