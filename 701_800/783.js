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
var minDiffInBST = function(root) {
    let result = Number.MAX_VALUE,
        prev = null;
    inOrder(root);
    return result;

    function inOrder(root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        if (prev) {
            result = Math.min(result, root.val - prev);
        }
        prev = root.val;
        inOrder(root.right);
    }
};