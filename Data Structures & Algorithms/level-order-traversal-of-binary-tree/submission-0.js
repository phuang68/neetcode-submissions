/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const store = [];
        const queue = [];

        if(!root) return store;

        queue.push(root);

        while(queue.length > 0) {
            const levelSize = queue.length;
            const level = [];

            for(let i = 0; i < levelSize; i++) {
                const cur = queue.shift();
                level.push(cur.val);
                if(cur.left) queue.push(cur.left);
                if(cur.right) queue.push(cur.right);
            }

            store.push(level);
        }
        
        return store;
    }
}
