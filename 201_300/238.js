/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length,
        res = [len];
    for (let i = 0, tem = 1; i < len; i++) {
        res[i] = tem;
        tem *= nums[i];
    }
    for (let i = len - 1, tem = 1; i >= 0; i--) {
        res[i] *= tem;
        tem *= nums[i];
    }
    return res;
};