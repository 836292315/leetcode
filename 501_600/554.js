/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let map = {};
    let max = 0;
    for (let i = 0; i < wall.length; i++) {
        let sum = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j];
            if (map[sum] === undefined) {
                map[sum] = 1;
            } else {
                map[sum]++;
            }
            //map[sum] = (map[sum] || 0) + 1;
            max = Math.max(max, map[sum]);
        }
    }
    return wall.length - max;
};