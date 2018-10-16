/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let map = new Map(),
        res = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let sum = A[i] + B[j];
            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1);
            } else {
                map.set(sum, 1);
            }
        }
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let sum = -1 * (C[i] + D[j]);
            if (map.has(sum)) {
                res += map.get(sum);
            }
        }
    }
    return res;
};