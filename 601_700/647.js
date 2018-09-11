/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res += helper(s, i, i);
        res += helper(s, i, i + 1);
    }
    return res;

    function helper(s, i, j) {
        let count = 0;
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            count++;
            i--;
            j++;
        }
        return count;
    }
};