var twoSum = function (nums, target) {
    var house = {};
    for (var i = 0; i < nums.length; i++) {
        var val1 = nums[i];
        var val2 = target - nums[i];
        if (val2 in house) {
            return [house[val2], i];
        }
        house[val1] = i;
    }
    return null;
};
