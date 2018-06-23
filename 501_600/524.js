/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let res = '';
    for (let str of d) {
        let i = 0;
        for (let c of s) {
            if (i < str.length && c === str[i]) ++i;
        }
        if (i === str.length && str.length >= res.length) {
            if (str.length > res.length || str < res) {
                res = str;
            }
        }
    }
    return res;
};