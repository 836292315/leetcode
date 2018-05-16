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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [],
        path = [];
    if (!root) {
        return result;
    }
    helper(root, sum, path);
    return result;

    function helper(root, sum, path) {
        path.push(root.val);
        if (!root.left && !root.right && sum === root.val) {
            result.push(path.slice());
        }
        if (root.left) {
            helper(root.left, sum - root.val, path);
        }
        if (root.right) {
            helper(root.right, sum - root.val, path);
        }
        path.pop();
    }
};