/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let res1 = [],
        res2 = [];
    helper(root1, res1);
    helper(root2, res2);

    if (res1.length !== res2.length) {
        return false;
    }
    for (let i = 0; i < res1.length; i++) {
        if (res1[i] !== res2[i]) {
            return false;
        }
    }
    return true;

    function helper(root, res) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            res.push(root.val);
        }
        helper(root.left, res);
        helper(root.right, res);
    }
};