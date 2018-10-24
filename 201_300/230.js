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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = countNodes(root.left);
    if (k <= count) {
        return kthSmallest(root.left, k);
    } else if (k > count + 1) {
        return kthSmallest(root.right, k - count - 1);
    }
    return root.val;

    function countNodes(n) {
        if (!n) return 0;
        return 1 + countNodes(n.left) + countNodes(n.right);
    }
};