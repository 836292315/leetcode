/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 * refer to https://leetcode.com/problems/split-linked-list-in-parts/discuss/125465/Javascript-solution-commented
 */
var splitListToParts = function(root, k) {
    let res = new Array(k).fill(null);
    let len = 0;
    for (let node = root; node !== null; node = node.next) {
        len++;
    }
    let resSize = Math.floor(len / k);
    let remainder = len % k;
    let current = root;
    for (let i = 0; i < k && current !== null; i++) {
        res[i] = current;
        let end = current;
        let size = resSize + (remainder-- > 0 ? 1 : 0);

        for (let j = 0; j < size; j++) {
            end = current;
            current = current.next;
        }
        end.next = null;
    }
    return res;
};