/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let list = head;
    while (list.next) {
        if (list.val === list.next.val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }
    return head;

    /*
    if (!head || !head.next) {
        return head;
    }
    if (head.val === head.next.val) {
        head.next = head.next.next;
        deleteDuplicates(head);
    } else {
        deleteDuplicates(head.next);
    }
    return head;
    */
};