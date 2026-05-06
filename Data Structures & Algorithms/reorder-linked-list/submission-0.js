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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;

        // Cut first half
        slow.next = null;

        second =  this.reverse(second);

        let first = head;

        while(second) {
            let next1 = first.next;
            let next2 = second.next;
            first.next = second;
            second.next = next1;
            first = next1;
            second = next2;
        }

        return head;
    }

    reverse(head) {
        let prev = null

        while(head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        return prev;
    }
}
