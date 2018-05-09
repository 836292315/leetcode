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
var sortedArrayToBST = function(nums) {
    if (nums === null || nums.length === 0) {
        return null;
    }
    return helper(nums, 0, nums.length - 1);

    function helper(nums, l, r) {
        if (l > r) {
            return null;
        }
        var mid = Math.floor((l + r) / 2);
        var root = new TreeNode(nums[mid]);
        root.left = helper(nums, l, mid - 1);
        root.right = helper(nums, mid + 1, r);
        return root;
    }
};