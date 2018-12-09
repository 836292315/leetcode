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

/*
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    while (stack.length || root !== null) {
        if (root !== null) {
            stack.push(root);
            res.push(root.val);
            root = root.right;
        }
        else {
            root = stack.pop().left;
        }
    }
    res.reverse();
    return res;
};
*/

var postorderTraversal = function (root) {
    let array = [];
    traversal(array, root);
    return array;
};

var traversal = function (array, node) {
    if (node === null) {
        return;
    }
    if (node.left === null && node.right === null) {
        array.push(node.val);
        return;
    }
    traversal(array, node.left);
    traversal(array, node.right);
    array.push(node.val);
};
