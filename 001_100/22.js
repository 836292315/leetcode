/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    helper(res, '', 0, 0, n);
    return res;

    function helper(res, str, left, right, max) {
        if (str.length === 2 * max) {
            res.push(str);
        }
        if (left < max) {
            helper(res, str + '(', left + 1, right, max);
        }
        if (right < left) {
            helper(res, str + ')', left, right + 1, max);
        }
    }
};