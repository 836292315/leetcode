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
var getMinimumDifference = function(root) {
    let result = Number.MAX_VALUE,
        prev = -1;
    inOrder(root);
    return result;

    function inOrder(root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        if (prev !== -1) {
            result = Math.min(result, root.val - prev);
        }
        prev = root.val;
        inOrder(root.right);
    }
};