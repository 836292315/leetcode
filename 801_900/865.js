/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    if (root === null) return null;
    let left = helper(root.left);
    let right = helper(root.right);
    if (left === right) return root;
    if (left > right) return subtreeWithAllDeepest(root.left);
    return subtreeWithAllDeepest(root.right);

    function helper(root) {
        if (root === null) return 0;
        return Math.max(helper(root.right), helper(root.left)) + 1;
    }
};