/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length === 0) return [];
    let res = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let dirs = [[-1, 1], [1, -1]];
    let r = 0, c = 0, d = 0;

    for (let i = 0; i < m * n; i++) {
        res.push(matrix[r][c]);
        r += dirs[d][0];
        c += dirs[d][1];
        if (r >= m) { r = m - 1; c = c + 2; d = 1 - d }
        if (c >= n) { c = n - 1; r = r + 2; d = 1 - d }
        if (r < 0) { r = 0; d = 1 - d }
        if (c < 0) { c = 0; d = 1 - d }
    }
    return res;
};
