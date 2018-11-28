/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    let res = [];
    let height = root === null ? 1 : getHeight(root);
    let rows = height;
    let columns = Math.pow(2, height) - 1;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push("");
        }
        res.push(row);
    }
    helper(root, 0, rows, 0, columns - 1);
    return res;

    function helper(root, row, totalRows, i, j) {
        if (root === null || row === totalRows) return;
        let mid = (j - i) / 2 + i;
        res[row][mid] = "" + (root.val);
        helper(root.left, row + 1, totalRows, i, mid - 1);
        helper(root.right, row + 1, totalRows, mid + 1, j);
    }

    function getHeight(root) {
        if (root === null) return 0;
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    }
};
