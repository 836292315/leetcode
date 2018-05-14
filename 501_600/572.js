/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (s === null) {
        return false;
    }
    if (isSame(s, t)) {
        return true;
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t);

    function isSame(node1, node2) {
        if (node1 === null || node2 === null) {
            return node1 === node2;
        }
        if (node1.val !== node2.val) {
            return false;
        }
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }
};