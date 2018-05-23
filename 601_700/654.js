/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let root = null;
    root = helper(root, nums);
    return root;

    function helper(node, arr) {
        if (arr && arr.length) {
            var maxNum = Math.max(...arr);
            var maxNumIndex = arr.findIndex(num => num === maxNum);
            var left = arr.slice(0, maxNumIndex);
            var right = arr.slice(maxNumIndex + 1);
            node = new TreeNode(maxNum);
            node.left = helper(node.left, left);
            node.right = helper(node.right, right);
            return node;
        }
        return null;
    }
};