/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    /*
    let sum1 = 0,
        sum2 = 0;
    for (let i = 0; i < A.length; i++) {
        sum1 += A[i];
    }
    for (let i = 0; i < B.length; i++) {
        sum2 += B[i];
    }
    let tem = (sum1 - sum2) / 2;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] - B[j] === tem) {
                return [A[i], B[j]];
            }
        }
    }
    */

    let sum1 = 0,
        sum2 = 0;
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
        sum1 += A[i];
    }
    for (let i = 0; i < B.length; i++) {
        sum2 += B[i];
        set.add(B[i]);
    }
    let tem = (sum1 - sum2) / 2;
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i] - tem)) {
            return [A[i], A[i] - tem];
        }
    }
};