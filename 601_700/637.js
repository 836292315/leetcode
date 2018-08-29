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
var averageOfLevels = function(root) {
    let res = [];
    let q = [];
    q.push(root);

    while (q.length > 0) {
        let sum = 0,
            count = 0,
            temp = [];

        while (q.length > 0) {
            var first = q.shift();
            sum += first.val;
            count++;
            if (first.left != null) temp.push(first.left);
            if (first.right != null) temp.push(first.right);
        }
        q = temp;
        res.push(sum / count);
    }
    return res;
};