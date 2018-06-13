/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let tem = 0,
        result = [];
    for (let i = 0; i < nums.length; i++) {
        tem ^= nums[i];
    }
    tem &= -tem;
    for (let j = 0; j < nums.length; j++) {
        if ((nums[j] & tem) === 0) {
            result[0] ^= nums[j];
        } else {
            result[1] ^= nums[j];
        }
    }
    return result;
};