/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let m = s1.length,
        n = s2.length,
        dp = [],
        res1 = 0,
        res2 = 0;
    for (let i = 0; i < m; i++) {
        res1 += s1.charCodeAt(i);
    }
    for (let i = 0; i < n; i++) {
        res2 += s2.charCodeAt(i);
    }
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(m);
        dp[i][0] = 0;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return res1 - dp[m][n] + res2 - dp[m][n];
};