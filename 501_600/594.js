var findLHS = function(nums) {
    function sort_nums(a, b) {
        return a - b;
    }
    nums.sort(sort_nums);
    var result = 0,
        left = 0,
        right = 0;
    while (right < nums.length) {
        if (nums[right] - nums[left] < 1) {
            right++;
        } else if (nums[right] - nums[left] === 1) {
            result = Math.max(result, right - left + 1);
            right++;
        } else {
            left++;
        }
    }
    return result;
};