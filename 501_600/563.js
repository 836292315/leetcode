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
var findTilt = function(root) {
    var result = 0;
    helper(root);
    return result;

    function helper(root) {
        if (root === null) {
            return 0;
        }
        var left = helper(root.left);
        var right = helper(root.right);
        result += Math.abs(right - left);
        return left + right + root.val;
    }
};