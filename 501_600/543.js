/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var result = 0;

    maxDepth(root);
    return result;

    function maxDepth(root) {
        if (root === null) {
            return 0;
        }
        var left = maxDepth(root.left);
        var right = maxDepth(root.right);
        result = Math.max(result, left + right);
        return Math.max(left, right) + 1;
    }
};