/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0);
    let head = list;
    let carry = 0;
    let s1 = [],
        s2 = [],
        l = [];
    while (l1 || l2) {
        if (l1) {
            s1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            s2.push(l2.val);
            l2 = l2.next;
        }
    }
    while (s1.length || s2.length) {
        let l1val = s1.length ? s1.pop() : 0;
        let l2val = s2.length ? s2.pop() : 0;
        let sum = l1val + l2val + carry;
        carry = Math.floor(sum / 10);
        l.push(sum % 10);
    }
    if (carry) {
        l.push(carry);
    }
    while (l.length) {
        list.next = new ListNode(l.pop());
        list = list.next;
    }
    return head.next;
};