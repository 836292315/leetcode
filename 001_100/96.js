/**
 * @param {number} n
 * @return {number}
 *refer to https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i)
 */
var numTrees = function (n) {
    let res = new Array(n + 1).fill(0);
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            res[i] += res[j - 1] * res[i - j];
        }
    }
    return res[n];
};
