/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let res = [0];
    for (let i = 1; i <= n; i++) {
        let m = Math.pow(2, i - 1);
        for (let j = res.length - 1; j >= 0; j--) {
            res.push(m + res[j]);
        }
    }
    return res;
};
