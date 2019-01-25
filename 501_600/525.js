/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/contiguous-array/discuss/99646/Easy-Java-O(n)-Solution-PreSum-%2B-HashMap
 */
var findMaxLength = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) nums[i] = -1;
    }

    let res = 0,
        sum = 0;
    let map = new Map();
    map.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum)) {
            res = Math.max(res, i - map.get(sum));
        }
        else {
            map.set(sum, i);
        }
    }
    return res;
};
