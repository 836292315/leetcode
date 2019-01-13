/**
 * @param {number[]} A
 * @return {number}
 * refer to https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/discuss/152343/C%2B%2BJavaPython-Check-Pair
 */
var lenLongestFibSubseq = function (A) {
    let map = new Set();
    for (let num of A) {
        map.add(num);
    }
    let res = 2;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let a = A[i], b = A[j], len = 2;
            while (map.has(a + b)) {
                b = a + b;
                a = b - a;
                len++;
            }
            res = Math.max(res, len);
        }
    }
    return res === 2 ? 0 : res;
};
