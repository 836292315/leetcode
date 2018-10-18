/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);

    for (let start = 0; start < len - 2; start++) {
        if(nums[start] > 0) break;
        if (start > 0 && nums[start - 1] === nums[start]) continue;
        let _target = -nums[start];
        for (let i = start + 1, end = len - 1; i < end;) {
            let sum = nums[i] + nums[end];
            if (sum === _target) {
                res.push([nums[start], nums[i], nums[end]]);
                while (i < end && nums[i] === nums[i + 1]) i++;
                while (i < end && nums[end] === nums[end - 1]) end--;
                i++;
                end--;
            } else if (sum > _target) {
                end--;
            } else {
                i++;
            }
        }

    }
    return res;
};