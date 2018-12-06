/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    helper(root, 0);
    return res;

    function helper(node, level) {
        if (!node) return;
        if (res.length <= level) {
            res.push([]);
        }
        res[level].push(node.val);
        helper(node.left, level + 1);
        helper(node.right, level + 1);
    }
};
