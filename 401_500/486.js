/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {

    function helper(nums, start, end) {
        if (start === end) {
            return nums[start];
        } else {
            return Math.max(nums[start] - helper(nums, start + 1, end), nums[end] - helper(nums, start, end - 1));
        }
    }

    return helper(nums, 0, nums.length - 1) >= 0;
    /*
        let n = nums.length;
        if ((n & 1) === 0) {
            return true;
        }
        let dp = new Array(n);
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (i === j) {
                    dp[i] = nums[i];
                } else {
                    dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
                }
            }
        }
        return dp[n - 1] >= 0;
    */
};