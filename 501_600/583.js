/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = [],
        m = word1.length,
        n = word2.length;
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(m);
        dp[i][0] = 0;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return m - dp[m][n] + n - dp[m][n];
};