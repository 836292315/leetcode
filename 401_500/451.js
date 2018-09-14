/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {},
        res = '',
        arr = [];
    helper(obj, s);
    for (let char in obj) {
        arr.push([char, obj[char]]);
    }
    arr = arr.sort((a, b) => b[1] - a[1]);
    while (arr.length) {
        let tem = arr.shift();
        res += tem[0].repeat(tem[1]);
    }
    return res;

    function helper(obj, str) {
        for (let i = 0; i < str.length; i++) {
            if (!obj[str[i]]) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]]++;
            }
        }
    }
};