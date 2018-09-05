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
var largestValues = function(root) {
    let res = [];
    helper(root, 0, res);
    return res;

    function helper(root, level, res) {
        if (root === null) return;
        if (res[level] === undefined || res[level] < root.val) {
            res[level] = root.val;
        }
        helper(root.left, level + 1, res);
        helper(root.right, level + 1, res);
    }
};