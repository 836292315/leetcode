/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    helper([], nums);
    return res;

    function helper(cur, remain) {
        if (remain.length < 1) {
            res.push(cur.slice());
        } else {
            for (let i = 0; i < remain.length; i++) {
                cur.push(remain[i]);
                helper(cur.slice(), remain.slice(0, i).concat(remain.slice(i + 1)));
                cur.pop();
            }
        }
        return res;
    }
};