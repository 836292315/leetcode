/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    nums.sort((a,b) => a-b);
    let res = new Array(target + 1).fill(0);
    res[0] = 1;
    for (let i = 1; i < res.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) {
                res[i] += res[i - nums[j]];
            }
        }
    }
    return res[target];
};
