/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    /*
    let max = A[0],
        min = A[0];
    for (let i = 1; i < A.length; i++) {
        max = Math.max(max, A[i]);
        min = Math.min(min, A[i]);
    }
    return Math.max(0, max - min - 2 * K);
    */
    let max = Math.max(...A),
        min = Math.min(...A);
    return Math.max(0, max - min - 2 * K);
};