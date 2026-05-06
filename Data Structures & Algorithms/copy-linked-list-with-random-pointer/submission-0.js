// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // Create copy
        let hashMap = new Map();
        hashMap.set(null, null)
        
        let cur = head;
        while(cur) {
            const node = new Node(cur.val);
            hashMap.set(cur, node);
            cur = cur.next;
        }

        cur = head;
        while(cur) {
            const node = hashMap.get(cur)
            node.next = hashMap.get(cur.next);
            node.random = hashMap.get(cur.random);
            cur = cur.next;
        }

        return hashMap.get(head);
    }
}
