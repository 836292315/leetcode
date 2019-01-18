/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Array(26).fill(0);
    let maxCount = 0;
    let start = 0;
    let res = 0;
    for (let end = 0; end < s.length; end++) {
        count[s.charCodeAt(end) - 65]++;
        maxCount = Math.max(maxCount, count[s.charCodeAt(end) - 65]);

        if (end - start + 1 - maxCount > k) {
            count[s.charCodeAt(start) - 65]--;
            start++;
        }

        res = Math.max(res, end - start + 1);
    }
    return res;
};
