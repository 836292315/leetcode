/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let res = 0;
    for (let i = nums.length - 1; i >= 2; i--) {
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                res += right - left;
                right--;
            }
            else {
                left++;
            }
        }
    }
    return res;
};
