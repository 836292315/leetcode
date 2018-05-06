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
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }
    var result = 0;
    if (root.left !== null) {
        if (root.left.left === null && root.left.right === null) {
            result += root.left.val;
        } else {
            result += sumOfLeftLeaves(root.left);
        }
    }
    result += sumOfLeftLeaves(root.right);
    return result;
};