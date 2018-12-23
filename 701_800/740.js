/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let sum = Array(10001).fill(0);
    for (let num of nums) {
        sum[num] += num;
    }
    for (let i = 2; i < 10001; i++) {
        sum[i] = Math.max(sum[i - 1], sum[i - 2] + sum[i]);
    }
    return sum[10000];
};
