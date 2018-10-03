/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
    return helper(N);

    function helper(N) {
        let res = [];
        if (N % 2 === 0) return res;
        if (N === 1) return [new TreeNode(0)];

        for (let i = 1; i <= N - 2; i += 2) {
            let lefts = helper(i);
            let rights = helper(N - 1 - i);

            for (let j = 0; j < lefts.length; j++) {
                for (let k = 0; k < rights.length; k++) {
                    let node = new TreeNode(0);
                    node.left = lefts[j];
                    node.right = rights[k];
                    res.push(node);
                }
            }
        }
        return res;
    }
};