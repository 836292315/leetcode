var findSecondMinimumValue = function(root) {
    if (root === null) {
        return -1;
    }
    if (root.left === null && root.right === null) {
        return -1;
    }
    var left = root.left.val,
        right = root.right.val;
    if (root.left.val === root.val) {
        left = findSecondMinimumValue(root.left);
    }
    if (root.right.val === root.val) {
        right = findSecondMinimumValue(root.right);
    }
    if (left !== -1 && right !== -1) {
        return Math.min(right, left);
    } else if (left !== -1) {
        return left;
    } else {
        return right;
    }
};