/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root];
    let hasEmptyNode = false;
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            if (hasEmptyNode) return false;
            queue.push(node.left);
            queue.push(node.right);
        } else {
            hasEmptyNode = true;
        }
    }
    return true;
};
