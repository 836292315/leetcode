/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 * refer to https://leetcode.com/problems/word-subsets/discuss/175850/Java-14-line-clean-code-count-the-most-frequent-char-of-words-in-B
 */
var wordSubsets = function (A, B) {
    let gf = Array(26).fill(0);
    for (b of B) {
        let f = Array(26).fill(0);
        for (c of b) {
            f[c.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            gf[i] = Math.max(gf[i], f[i]);
        }
    }
    let res = [];
    outermost:
    for (a of A) {
        let f = Array(26).fill(0);
        for (c of a) {
            f[c.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            if (f[i] < gf[i]) continue outermost;
        }
        res.push(a);
    }
    return res;
};
