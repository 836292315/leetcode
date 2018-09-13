/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    let distance = 0,
        g_distance = 0;
    distance = Math.abs(target[0]) + Math.abs(target[1]);
    for (let el of ghosts) {
        g_distance += Math.abs(el[0] - target[0]) + Math.abs(el[1] - target[1]);
        if (g_distance < distance) {
            return false;
        }
    }
    return true;
};