/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let obj = {}, res = [];
    preOrder(root, obj, res);
    return res;

    function preOrder(root, map, res) {
        if (root === null) return '#';
        let str = root.val + preOrder(root.left, map, res) + preOrder(root.right, map, res);
        if (!map[str]) map[str] = 0;
        map[str]++;
        if (map[str] === 2) res.push(root);
        return str;
    }
};
