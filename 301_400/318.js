/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let len = words.length;
    let max = 0;
    let arr = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < words[i].length; j++) {
            arr[i] |= 1 << (words[i].charCodeAt(j) - 'a'.charCodeAt(0));
        }
    }

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((arr[i] & arr[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};