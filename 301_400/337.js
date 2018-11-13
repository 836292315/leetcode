var rob = function (root) {
    if (root === null) return 0;
    return Math.max(robInclude(root), robExclude(root));
};

var robInclude = function (node) {
    if (node === null) return 0;
    return robExclude(node.left) + robExclude(node.right) + node.val;
};

var robExclude = function (node) {
    if (node === null) return 0;
    return rob(node.left) + rob(node.right);
};