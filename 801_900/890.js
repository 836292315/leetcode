/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    let patternStr = helper(pattern);
    let res = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length === pattern.length) {
            if (patternStr === helper(words[j])) {
                res.push(words[j]);
            }
        }
    }
    return res;

    function helper(el) {
        let dic = {};
        let arr = [];
        for (let i = 0; i < el.length; i++) {
            if (dic[el[i]] === undefined) {
                dic[el[i]] = i;
            }
            arr.push(dic[el[i]]);
        }
        return arr.join('');
    }
};