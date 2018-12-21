/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (S > sum || (sum + S) % 2 === 1) {
        return 0;
    }
    return helper(nums, (sum + S) / 2);

    function helper(nums, S) {
        let dp = new Array(S + 1).fill(0);
        dp[0] = 1;
        for (let i = 0; i < nums.length; i++) {
            for (let j = S; j >= nums[i]; j--) {
                dp[j] += dp[j - nums[i]];
            }
        }
        return dp[S];
    }
};
