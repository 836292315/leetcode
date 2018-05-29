/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var len1 = findNums.length,
        len2 = nums.length,
        result = [];
    for (var i = 0; i < len1; i++) {
        var index = nums.indexOf(findNums[i]);
        if (index === len2 - 1) {
            result.push(-1);
        } else {
            for (var j = index + 1; j < len2; j++) {
                if (findNums[i] < nums[j]) {
                    result.push(nums[j]);
                    break;
                }
                if (j === len2 - 1) {
                    result.push(-1);
                }
            }
        }

    }
    return result;
};