/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    helper(1, [], k, n);
    return res;

    function helper(start, arr, k, n) {
        if (k === 0 && n === 0) {
            return res.push(arr);
        }
        if (start > 9) {
            return;
        }
        arr.push(start);
        helper(start + 1, arr.slice(0), k - 1, n - start);
        arr.pop();
        helper(start + 1, arr.slice(0), k, n);
    }
};