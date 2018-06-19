/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    function reverse(head) {
        let prev = null;
        while (head !== null) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    let fast = head,
        slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast != null) {
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;

    while (slow !== null) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;

    /*
    if (!head || !head.next) {
        return true;
    }
    let arr = [],
        tem = head;
    while (tem) {
        arr.push(tem.val);
        tem = tem.next;
    }
    let i = 0,
        j = arr.length - 1;
    while (j > i) {
        if (arr[i] !== arr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
    */
};