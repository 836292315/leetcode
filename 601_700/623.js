/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d === 1) {
        let node = new TreeNode(v);
        node.left = root;
        return node;
    }
    helper(root, v, d, 1);
    return root;

    function helper(root, v, d, cur) {
        if (!root) return;
        if (cur === d - 1) {
            let temp1 = new TreeNode(v);
            temp1.left = root.left;
            root.left = temp1;
            let temp2 = new TreeNode(v);
            temp2.right = root.right;
            root.right = temp2;
            return;
        }
        helper(root.left, v, d, cur + 1);
        helper(root.right, v, d, cur + 1);
    }
};