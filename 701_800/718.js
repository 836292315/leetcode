/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let max = 0;
    let m = A.length;
    let n = B.length;
    let dp = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i] === B[j]) {
                dp[i + 1][j + 1] = 1 + dp[i][j];
                max = Math.max(max, dp[i + 1][j + 1]);
            }
        }
    }
    return max;
};
