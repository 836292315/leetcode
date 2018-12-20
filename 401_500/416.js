/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum & 1) return false;
    let target = sum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= nums.length; i++) {
        for (let j = target; j >= nums[i - 1]; j--) {
            dp[j] = dp[j] || dp[j - nums[i - 1]];
        }
    }
    return dp[target];
};
