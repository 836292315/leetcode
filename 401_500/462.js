/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => b - a);
    let i = 0,
        j = nums.length - 1;
    let res = 0;
    while (i < j) {
        res += nums[i] - nums[j];
        i++;
        j--;
    }
    return res;
};