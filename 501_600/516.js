/**
 * @param {string} s
 * @return {number}
 * refer to
 * https://leetcode.com/problems/longest-palindromic-subsequence/discuss/99101/Straight-forward-Java-DP-solution/103142
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0);
        dp[i][i] = 1;
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i - 1][j + 1] + 2;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j + 1]);
            }
        }
    }
    return dp[n - 1][0];
};
