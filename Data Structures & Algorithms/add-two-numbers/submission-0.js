/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0, null);
        let res = dummy;
        let carry = 0;

        while(l1 && l2) {
            let cur = l1.val + l2.val + carry;
            carry = Math.floor(cur / 10);
            dummy.next = new ListNode(cur % 10, null);
            dummy = dummy.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        while(l1) {
            let cur = l1.val + carry;
            carry = Math.floor(cur/10);
            dummy.next = new ListNode(cur % 10, null);
            dummy = dummy.next;
            l1 = l1.next;
        }

        while(l2) {
            let cur = l2.val + carry;
            carry = Math.floor(cur/10);
            dummy.next = new ListNode(cur % 10, null);
            dummy = dummy.next;
            l2 = l2.next;
        }

        if(carry > 0) {
            dummy.next = new ListNode(carry, null);
        }

        return res.next;
    }
}
