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
    mergeTwoLists(node1, node2) {
        let dummy = new ListNode(0, null);
        let res = dummy;

        while(node1 && node2) {
            let next1 = node1.next;
            let next2 = node2.next;

            if(node1.val <= node2.val) {
                node1.next = null;
                dummy.next = node1;
                node1 = next1;
            } else {
                node2.next = null;
                dummy.next = node2;
                node2 = next2;
            }

            dummy = dummy.next;

        }

        if(node1) {
            dummy.next = node1;
        }

        if(node2) {
            dummy.next = node2;
        }

        return res.next;
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let len = lists.length;
        if(len === 0) return null;

        if(len === 1) return lists[0];

        for(let i = 1; i < len; i++) {
            lists[i] = this.mergeTwoLists(lists[i], lists[i - 1]);
        }

        return lists[len - 1];
    }
}
