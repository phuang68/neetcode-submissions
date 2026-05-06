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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while(true) {
            let kth = this.getKth(groupPrev, k);

            // Break out of loop once reach less than k;
            if(kth === null) {
                break;
            }

            // Reverse k nodes, get next group head, prev group tail
            let groupNext = kth.next;
            let cur = groupPrev.next;
            let prev = kth.next;
            while(cur !== groupNext) {
                let next = cur.next;
                cur.next = prev;
                prev = cur;
                cur = next;
            }

            // Update prev group tail
            let nextPrev = groupPrev.next;
            console.log(nextPrev.val)
            groupPrev.next = kth;
            groupPrev = nextPrev;
        }

        return dummy.next;
    }

    getKth(cur, k) {
        while(cur && k > 0) {
            cur = cur.next;
            k--;
        }
        return cur;
    }
}
