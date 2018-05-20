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
var findMode = function(root) {

    var currVal = null,
        currCount = 0,
        maxCount = 0,
        modeCount = 0,
        modes = [];
    inorder(root);
    return modes.slice(0, modeCount);

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        handleVlaue(node.val);
        inorder(node.right);
    }

    function handleVlaue(val) {
        if (currVal !== val) {
            currVal = val;
            currCount = 0;
        }
        currCount++;
        if (currCount > maxCount) {
            maxCount = currCount;
            modeCount = 1;
            modes[0] = currVal;
        } else if (currCount === maxCount) {
            modes[modeCount] = currVal;
            modeCount++;
        }
    }
};