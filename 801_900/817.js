/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let map = new Set(G);
    let res = 0;
    while (head !== null) {
        let flag = false;
        while (head !== null && map.has(head.val)) {
            flag = true;
            head = head.next;
        }
        if (flag) {
            res++;
        }
        if (head) {
            head = head.next;
        }
    }
    return res;
};