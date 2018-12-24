/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function (S, K) {
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
};
