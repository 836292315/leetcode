/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let arr = [];

    function inorder(root) {
        if (root === null) return;
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root);

    let res = new TreeNode();
    let tmp = res;
    for (let i = 0; i < arr.length; i++) {
        tmp.val = arr[i];
        if (i < arr.length - 1) {
            tmp.right = new TreeNode();
            tmp = tmp.right;
        }
    }
    return res;
};