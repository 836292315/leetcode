/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let size = 0;
        for (let j = i; nums[j] >= 0; size++) {
            let nums_j = nums[j];
            nums[j] = -1;
            j = nums_j;
        }
        res = Math.max(res, size);
    }
    return res;
};