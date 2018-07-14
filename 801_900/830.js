/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let result = [],
        el = [0, 0];
    for (let i = 0; i < S.length; i++) {
        if (i === S.length - 1 || S[i] !== S[i + 1]) {
            el[1] = i;
            if (el[1] - el[0] >= 2) {
                result.push(el);
            }
            el = [i + 1, i + 1];
        }
    }
    return result;
};