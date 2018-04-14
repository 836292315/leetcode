var islandPerimeter = function(grid) {
    var island = 0,
        next_island = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                island++;
                if (i < grid.length - 1 && grid[i + 1][j] === 1) {
                    next_island++;
                }
                if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
                    next_island++;
                }
            }
        }
    }
    return 4 * island - 2 * next_island;
};