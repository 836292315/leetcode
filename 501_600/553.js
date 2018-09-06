/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    let res = '' + nums[0];
    if (nums.length === 1) return res;
    if (nums.length === 2) return res = res + '/' + nums[1];
    res = res + '/(' + nums[1];
    for (let i = 2; i < nums.length; i++) {
        res += '/' + nums[i];
    }
    return res + ')';
};