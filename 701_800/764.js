/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
    let res = 0;
    let grid = new Array(N);
    for (let i = 0; i < N; i++) {
        grid[i] = new Array(N).fill(1);
    }
    for (let i = 0; i < mines.length; i++) {
        grid[mines[i][0]][mines[i][1]] = 0;
    }

    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
            let k = 0;
            while (canExpand(grid, N, i, j, k))++k;
            res = Math.max(res, k);
        }
    }

    function canExpand(grid, N, x, y, k) {
        if (x - k < 0 || y - k < 0 || x + k >= N || y + k >= N) return false;
        return grid[x - k][y] && grid[x][y + k] && grid[x + k][y] && grid[x][y - k];
    }

    return res;
};
