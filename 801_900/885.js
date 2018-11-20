/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    let res = [];
    res.push([r0, c0]);
    let step = 1,
        len = 0;
    while (res.length < R * C) {
        //right
        len = c0 + step;
        while (c0 < len) {
            if (c0 + 1 < C && c0 + 1 >= 0 && r0 >= 0) {
                res.push([r0, c0 + 1]);
            }
            c0++;
        }
        //down
        len = r0 + step;
        while (r0 < len) {
            if (r0 + 1 < R && r0 + 1 >= 0 && c0 < C) {
                res.push([r0 + 1, c0]);
            }
            r0++;
        }
        step++;
        //left
        len = c0 - step;
        while (len < c0) {
            if (c0 - 1 >= 0 && c0 - 1 < C && r0 < R) {
                res.push([r0, c0 - 1]);
            }
            c0--;
        }
        //top
        len = r0 - step;
        while (len < r0) {
            if (r0 - 1 < R && r0 - 1 >= 0 && c0 >= 0) {
                res.push([r0 - 1, c0]);
            }
            r0--;
        }
        step++;
    }
    return res;
};
