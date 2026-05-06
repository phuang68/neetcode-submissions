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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let traverse = head;
        let total = 0;

        while(traverse){
            traverse = traverse.next;
            total++;
        }

        let removal = total - n;

        if(removal === 0) {
            return head.next;
        }

        traverse = head;

        while(removal > 1) {
            traverse = traverse.next;
            removal--;
        }

        traverse.next = traverse.next.next;
        
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
