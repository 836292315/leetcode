/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let sortArr = nums.slice(0).sort(function(a, b) {
        return b - a;
    });
    let sortArrMap = {};
    sortArr.forEach(function(num, index) {
        sortArrMap[num] = index + 1 + '';
    });
    return nums.map(function(num, index) {
        if (sortArrMap[num] === '1') {
            return 'Gold Medal';
        } else if (sortArrMap[num] === '2') {
            return 'Silver Medal';
        } else if (sortArrMap[num] === '3') {
            return 'Bronze Medal';
        } else {
            return sortArrMap[num];
        }
    });
};