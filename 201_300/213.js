/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(helper(0, nums.length - 2, nums), helper(1, nums.length - 1, nums));

    function helper(low, high, nums) {
        let include = 0,
            exclude = 0;
        for (let j = low; j <= high; j++) {
            let i = include,
                e = exclude;
            include = e + nums[j];
            exclude = Math.max(e, i);
        }
        return Math.max(include, exclude);
    }
};