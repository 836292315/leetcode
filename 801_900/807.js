/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let n = grid.length;
    let col = [],
        row = [];
    for (let i = 0; i < n; i++) {
        col[i] = -1;
        row[i] = -1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row[i] = Math.max(row[i], grid[i][j]);
            col[j] = Math.max(col[j], grid[i][j]);
        }
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += Math.min(row[i], col[j]) - grid[i][j];
        }
    }
    return res;
};