/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);

    for (let start = 0; start < len - 3; start++) {
        if (start > 0 && nums[start - 1] === nums[start]) continue;
        let _target = target - nums[start];
        for (let i = start + 1; i < len - 2; i++) {
            if (i > start + 1 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1, end = len - 1; j < end;) {
                let sum = nums[i] + nums[j] + nums[end];
                if (sum === _target) {
                    res.push([nums[start], nums[i], nums[j], nums[end]]);
                    while (j < end && nums[j] === nums[j + 1]) j++;
                    while (j < end && nums[end] === nums[end - 1]) end--;
                    j++;
                    end--;
                } else if (sum > _target) {
                    end--;
                } else {
                    j++;
                }
            }
        }
    }
    return res;
};