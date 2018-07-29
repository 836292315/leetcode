/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let min = 1;
    let max = nums.length - 1;
    while (min < max) {
        let count = 0;
        let mid = min + Math.floor((max - min) / 2);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++;
            }
        }
        if (count <= mid) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
};