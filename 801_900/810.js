/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
    let res = 0;
    for (let i of nums) {
        res = res ^ i;
    }
    return res === 0 || nums.length % 2 === 0;
};
