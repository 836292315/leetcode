/**
 * @param {number[]} prices
 * @return {number}
 *refer to https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75927/Share-my-thinking-process
 */
var maxProfit = function(prices) {
    let sell = 0,
        prev_sell = 0,
        buy = Number.MIN_SAFE_INTEGER,
        prev_buy;
    for (let price of prices) {
        prev_buy = buy;
        buy = Math.max(prev_sell - price, prev_buy);
        prev_sell = sell;
        sell = Math.max(prev_buy + price, prev_sell);
    }
    return sell;
};
