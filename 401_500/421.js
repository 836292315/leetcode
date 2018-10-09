/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://www.cnblogs.com/grandyang/p/5991530.html
 */
var findMaximumXOR = function(nums) {
    let res = 0,
        mask = 0;
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        let set = new Set();
        for (let num of nums) {
            set.add(num & mask);
        }
        let tem = res | (1 << i);
        for (let el of set) {
            if (set.has(tem ^ el)) {
                res = tem;
                break;
            }
        }
    }
    return res;
};