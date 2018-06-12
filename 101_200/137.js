/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            if ((nums[j] >> i) & 1 === 1) {
                sum++;
                sum = sum % 3;
            }
        }
        if (sum !== 0) {
            result = result | (sum << i);
        }
    }
    return result;
};