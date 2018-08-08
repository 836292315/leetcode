/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [],
        tem = [];

    helper(nums, 0);
    return res;

    function helper(nums, start) {
        res.push(tem.slice(0));
        for (let i = start; i < nums.length; i++) {
            tem.push(nums[i]);
            helper(nums, i + 1);
            tem.pop();
        }
    }
};