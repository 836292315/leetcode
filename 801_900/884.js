/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let map = {};
    let res = [];
    let arr = A.split(' ').concat(B.split(' '));
    for (let i of arr) {
        if (!map[i]) {
            map[i] = 1;
        } else {
            map[i] += 1;
        }
    }
    for (key in map) {
        if (map[key] === 1) {
            res.push(key);
        }
    }
    return res;
};