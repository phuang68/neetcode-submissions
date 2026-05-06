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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let build = {val: 0, next: null};
        let res = build;
    
        while(list1 && list2) {
            let next1 = list1.next;
            let next2 = list2.next;

            if(list1.val <= list2.val) {
                list1.next = null;
                build.next = list1;
                list1 = next1;
            } else {
                list2.next = null;
                build.next = list2;
                list2 = next2;
            }

            build = build.next;
        }

        if (list1) {
            build.next = list1;
        }

        if(list2) {
            build.next = list2;
        }

        return res.next;
    }
}
