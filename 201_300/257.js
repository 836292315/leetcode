var binaryTreePaths = function(root) {
    if (root === null) {
        return [];
    }
    var result = [];

    function helper(root, str) {
        if (root.left === null && root.right === null) {
            result.push(root.val);
        }
        if (root.left) {
            helper(root.left, str + root.val + "->");
        }
        if (root.right) {
            helper(root.right, str + root.val + "->");
        }
    }
    helper(root, "")
    return result;
};