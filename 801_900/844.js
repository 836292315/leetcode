/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return helper(S) === helper(T);

    function helper(tem) {
        let str = tem.split(''),
            res = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') {
                res.push(str[i])
            } else {
                res.pop()
            }
        }
        return res.join('')
    }
};