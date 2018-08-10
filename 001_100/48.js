/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let start = 0,
        end = matrix.length - 1;

    while (start < end) {
        let tem = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = tem;
        start++;
        end--;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let tem = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tem;
        }
    }
};