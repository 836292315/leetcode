var projectionArea = function(grid) {
    let z = 0,
        x = 0,
        y = 0;
    for (let i = 0; i < grid.length; ++i) {
        let mx = 0,
            my = 0; // max of x & y values.
        for (let j = 0; j < grid.length; ++j) {
            mx = Math.max(mx, grid[j][i]); // see above 1
            my = Math.max(my, grid[i][j]); // see above 2
            if (grid[i][j] > 0) {
                ++z;
            } // only the cell with positive value has a projection area of size 1 in z direction (on x-y plane). 
        }
        x += mx;
        y += my; // x & y projection accumulation.
    }
    return x + y + z;
}