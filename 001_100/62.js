/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = new Array(m);
    for (let i = 0; i < m; i++) {
        res[i] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            res[j] = res[j] + res[j - 1];
        }
    }
    return res[m - 1];
};