/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.root = root;
    this.stack = [];
    this.nxt = null;
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    while (this.root !== null) {
        this.stack.push(this.root);
        this.root = this.root.left;
    }

    if (this.stack.length === 0) {
        return false;
    }
    
    let tmp = this.stack.pop();
    this.nxt = tmp.val;
    this.root = tmp.right;

    return true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.nxt;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
