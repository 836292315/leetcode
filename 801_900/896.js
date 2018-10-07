/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    for (let i = 1; i < A.length; i++) {
        if (A[A.length - 1] >= A[0]) {
            if (A[i] < A[i - 1]) {
                return false;
            }
        }
        if (A[A.length - 1] <= A[0]) {
            if (A[i] > A[i - 1]) {
                return false;
            }
        }
    }
    return true;
};