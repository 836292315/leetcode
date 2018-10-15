/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let max = Number.MIN_VALUE;
    for (let num of nums) {
        max = Math.max(max, num);
    }

    let n = nums.length;
    let res = new Array(n).fill(-1);
    let temp = new Array(n * 2);

    for (let i = 0; i < n * 2; i++) {
        temp[i] = nums[i % n];
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] == max) continue;

        for (let j = i + 1; j < n * 2; j++) {
            if (temp[j] > nums[i]) {
                res[i] = temp[j];
                break;
            }
        }
    }

    return res;
};