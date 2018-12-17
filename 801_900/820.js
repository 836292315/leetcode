/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let set = new Set(words);
    
    for (let word of set) {
        for (let i = 1; i < word.length; i++) {
            if (set.has(word.substring(i))) {
                set.delete(word.substring(i));
            }
        }
    }
    
    let res = 0;
    for (let el of set) {
        res += el.length + 1;
    }
    return res;
};
