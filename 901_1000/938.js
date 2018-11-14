/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    dfs(root, L, R);
    return sum;

    function dfs(node, L, R) {
        if (node === null) return;
        if (node.val < L) {
            dfs(node.right, L, R);
        }
        else if (node.val > R) {
            dfs(node.left, L, R);
        }
        else {
            sum += node.val;
            dfs(node.left, L, R);
            dfs(node.right, L, R);
        }
    }
};