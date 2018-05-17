/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);

    function helper(root, sum) {
        var result = 0;
        if (!root) {
            return result;
        }
        if (root.val === sum) {
            result++;
        }
        result += helper(root.left, sum - root.val);
        result += helper(root.right, sum - root.val);
        return result;
    }
};