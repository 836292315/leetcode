/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let row = A.length,
        col = A[0].length;
    for (let i = 0; i < row; i++) {
        if (A[i][0] === 0) {
            helperRow(A, i);
        }
    }
    for (let i = 1; i < col; i++) {
        let sum = 0;
        for (let j = 0; j < row; j++) {
            sum += A[j][i];
        }
        if (sum * 2 < row) {
            helperCol(A, i);
        }
    }
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res += A[i][j] * (1 << (col - j - 1));
        }
    }
    return res;

    function helperRow(arr, r) {
        for (let i = 0; i < col; i++) {
            arr[r][i] = arr[r][i] ^ 1;
        }
    }

    function helperCol(arr, c) {
        for (let i = 0; i < row; i++) {
            arr[i][c] = arr[i][c] ^ 1;
        }
    }
};