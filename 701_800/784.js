/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let result = [];
    helper(S, 0, '', result);
    return result;

    function helper(S, len, el, result) {
        if (len === S.length) {
            result.push(el);
            return;
        }

        helper(S, len + 1, el + S[len].toLowerCase(), result);

        if (/[a-zA-Z]/.test(S[len])) {
            helper(S, len + 1, el + S[len].toUpperCase(), result);
        }
    }
};