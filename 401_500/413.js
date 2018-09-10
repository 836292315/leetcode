/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let res = 0,
        len = 2;
    for (let i = 2; i < A.length; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            len++
        } else {
            if (len > 2) {
                res += helper(len);
            }
            len = 2;
        }
    }

    if (len > 2) {
        res += helper(len);
    }
    return res;

    function helper(n) {
        return (n - 1) * (n - 2) / 2;
    }
};