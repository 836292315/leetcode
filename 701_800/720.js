/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let result = '';
    words.sort();
    let setWords = new Set(words);
    for (let el of words) {
        let isValid = true,
            key = '';
        for (let i = 0; i < el.length; i++) {
            key += el[i];
            if (!setWords.has(key)) {
                isValid = false;
                break;
            }
        }
        if (isValid && el.length > result.length) {
            result = el;
        }
    }
    return result;
};