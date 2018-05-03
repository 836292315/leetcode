/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var values = [];

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        values.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    var start = 0,
        end = values.length - 1;
    while (start < end) {
        var total = values[start] + values[end];
        if (total > k) {
            end--;
        } else if (total < k) {
            start++;
        } else {
            return true;
        }
    }
    return false;
};