/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let res = 0,
        pos = 0,
        lastPos = -1;
    while (N !== 0) {
        pos++;
        if ((N & 1) === 1) {
            if (lastPos !== -1) {
                res = Math.max(res, pos - lastPos);
            }
            lastPos = pos;
        }
        N = N >> 1
    }
    return res;
};