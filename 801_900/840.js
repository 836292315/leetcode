/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let res = 0;
    for (let i = 0; i <= grid.length - 3; i++)
        for (let j = 0; j <= grid[0].length - 3; j++)
            if (helper(i, j, grid)) res++;

    return res;

    function helper(x, y, grid) {
        if (grid[x + 1][y + 1] !== 5) return false;

        let map = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (let i = x; i <= x + 2; i++)
            for (let j = y; j <= y + 2; j++)
                map.delete(grid[i][j]);

        if (map.size !== 0) return false;

        if ((grid[x][y] + grid[x][y + 1] + grid[x][y + 2]) !== 15) return false;
        if ((grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2]) !== 15) return false;
        if ((grid[x][y] + grid[x + 1][y] + grid[x + 2][y]) !== 15) return false;
        if ((grid[x + 2][y] + grid[x + 2][y + 1] + grid[x + 2][y + 2]) !== 15) return false;
        if ((grid[x][y + 2] + grid[x + 1][y + 2] + grid[x + 2][y + 2]) !== 15) return false;
        if ((grid[x][y + 2] + grid[x + 1][y + 1] + grid[x + 2][y]) !== 15) return false;
        return true;
    }
};