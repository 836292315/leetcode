/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let res = 0,
        n = nums.length;
    for (let i = 0; i < 32; i++) {
        let countBits = 0;
        for (let j = 0; j < n; j++) {
            countBits += (nums[j] >> i) & 1;
        }
        res += countBits * (n - countBits);
    }
    return res;
};