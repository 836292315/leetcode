/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 * refer to 
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/discuss/161282/javascript-solution%3A-use-recursion/194161
 */
var constructFromPrePost = function (pre, post) {
    if (pre.length === 0) return null;
    if (pre.length === 1) return new TreeNode(pre[0]);
    let res = new TreeNode(pre[0]);
    let leftVal = pre[1], indexOfLeft = post.indexOf(leftVal);
    res.left = constructFromPrePost(pre.slice(1, indexOfLeft + 2), post.slice(0, indexOfLeft + 1));
    res.right = constructFromPrePost(pre.slice(indexOfLeft + 2), post.slice(indexOfLeft + 1));
    return res;
};
