/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                res += grid[i][j] * 4 + 2;
            }
            if (i) {
                res -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
            }
            if (j) {
                res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
            }
        }

    }
    return res;
};