/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {},
        sortObj = [],
        res = [];
    for (let num of nums) {
        if (!hash[num]) {
            hash[num] = {
                num: num,
                count: 1
            }
        } else {
            hash[[num]].count++;
        }
    }
    for (let key in hash) {
        sortObj.push(hash[key])
    }
    sortObj.sort(function(a, b) {
        return b.count - a.count;
    })
    return sortObj.slice(0, k).map(function(el) {
        return el.num;
    });
};