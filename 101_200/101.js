/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    return helper(root.left, root.right);

    function helper(left, right) {
        if (left === null && right === null) {
            return true;
        }
        if (left === null || right === null) {
            return false;
        }
        if (left.val === right.val) {
            return helper(left.left, right.right) && helper(left.right, right.left);
        } else {
            return false;
        }
    }
};