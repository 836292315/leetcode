/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    helper(root, res, 0);
    return res;

    function helper(node, res, currDepth) {
        if (node === null) return;
        if (currDepth === res.length) {
            res.push(node.val);
        }
        helper(node.right, res, currDepth + 1);
        helper(node.left, res, currDepth + 1);
    }
};
