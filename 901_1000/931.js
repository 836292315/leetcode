/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let len = A.length;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len; j++) {
            A[i][j] += Math.min(A[i - 1][j],
                A[i - 1][Math.max(0, j - 1)],
                A[i - 1][Math.min(A.length - 1, j + 1)]);
        }
    }
    return Math.min(...A[len - 1]);
};
