/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let len = matrix.length,
        low = matrix[0][0],
        high = matrix[len - 1][len - 1];
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let count = countNoGreaterThanNumber(matrix, mid);
        if (count < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;

    function countNoGreaterThanNumber(matrix, val) {
        let res = 0;
        let i = len - 1,
            j = 0;
        while (i >= 0 && j < len) {
            if (matrix[i][j] > val) {
                i--;
            } else {
                res += i + 1; //count the column
                j++;
            }
        }
        return res;
    }
};