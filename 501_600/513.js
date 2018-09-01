/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root, depth = 0, storage = {
    depth: -Infinity,
    value: 0
}) {
    if (!root) return;
    findBottomLeftValue(root.left, depth + 1, storage);
    if (depth > storage.depth) {
        storage.depth = depth;
        storage.value = root.val;
    }
    findBottomLeftValue(root.right, depth + 1, storage);
    return storage.value;
};