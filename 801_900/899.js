/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 * refer to https://leetcode.com/problems/orderly-queue/discuss/165871/JavaScript-A-trap-question
 *          https://leetcode.com/problems/orderly-queue/discuss/165878/C%2B%2BJavaPython-Sort-String-or-Rotate-String
 */
var orderlyQueue = function (S, K) {
    if (K > 1) {
        return S.split('').sort().join('');
    }
    let small = S.split('').sort()[0];
    let ops = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === small) ops.push(S.slice(i) + S.slice(0, i));
    }
    return ops.sort()[0];

    /*
    if (K > 1) {
        return S.split('').sort().join('');
    }
    let res = S;
    for (let i = 1; i < S.length; i++) {
        let temp = S.substring(i) + S.substring(0, i);
        if (res.localeCompare(temp) > 0) {
            res = temp;
        }
    }
    return res;
    */
};
