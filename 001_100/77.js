/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    helper(res, nums, 0, k, []);
    return res;

    function helper(res, nums, start, k, arr) {
        if (arr.length === k) {
            res.push(arr.slice());
        }
        for (let i = start; i < n; i++) {
            arr.push(nums[i]);
            helper(res, nums, i + 1, k, arr);
            arr.pop();
        }
    }
};
