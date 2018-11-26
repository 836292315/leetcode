/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let map = {
        sum: {},
        max: -1
    };
    let res = [];
    helper(root, map);
    Object.keys(map.sum).forEach(el => {
        if (map.sum[el] === map.max) {
            res.push(el);
        }
    });
    return res;

    function helper(root, map) {
        if (root === null) {
            return 0;
        }
        let lsum = helper(root.left, map);
        let rsum = helper(root.right, map);
        let value = root.val + lsum + rsum;
        map.sum[value] = (map.sum[value] || 0) + 1;
        if (map.sum[value] > map.max) {
            map.max = map.sum[value];
        }
        return value;
    }
};
