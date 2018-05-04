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
var convertBST = function(root) {
    var sum = 0;

    function convert(n) {
        if (n === null) {
            return;
        }
        convert(n.right);
        n.val += sum;
        sum = n.val;
        convert(n.left);
    }
    convert(root);
    return root;
};