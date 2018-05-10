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
var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }
    var values = [];
    helper(root, values, 0);
    return values.reverse();

    function helper(node, values, level) {
        if (values[level] === undefined) {
            values[level] = [];
        }
        values[level].push(node.val);
        if (node.left) {
            helper(node.left, values, level + 1);
        }
        if (node.right) {
            helper(node.right, values, level + 1);
        }
    }
};