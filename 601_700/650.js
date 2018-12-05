/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    if (n === 1) return 0;
    let dp = [];
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = i - 1; j > 1; j--) {
            if (i % j === 0) {
                dp[i] = dp[j] + (i / j);
                break;
            }
        }
    }
    return dp[n];
};
