/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let res = 0,
        layers = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            layers++;
        } else {
            layers--;
        }
        if (S[i] === '(' && S[i + 1] === ')') {
            res += 1 << (layers - 1);
        }
    }
    return res;
};