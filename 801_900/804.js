/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let res = new Set();
    for (let el of words) {
        let tem = '';
        for (let i of el) {
            tem += morse[i.charCodeAt(0) - 97];
        }
        res.add(tem);
    }
    return res.size;
};