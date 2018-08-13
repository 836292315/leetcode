/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            res[i][j] = [];
        }
    }
    let left = 0,
        top = 0;
    let right = n - 1,
        down = n - 1;
    let count = 1;
    while (left <= right) {
        for (let j = left; j <= right; j++) {
            res[top][j] = count++;
        }
        top++;
        for (let i = top; i <= down; i++) {
            res[i][right] = count++;
        }
        right--;
        for (let j = right; j >= left; j--) {
            res[down][j] = count++;
        }
        down--;
        for (let i = down; i >= top; i--) {
            res[i][left] = count++;
        }
        left++;
    }
    return res;
};