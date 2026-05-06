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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const queue = [];

        if(!root) return res;

        queue.push(root);

        while(queue.length > 0) {
            const levelSize = queue.length;
            console.log(levelSize);
            
            for(let i = 0; i < levelSize; i++) {
                let cur = queue.shift();
                if(cur.left) queue.push(cur.left);
                if(cur.right) queue.push(cur.right);

                if(i === levelSize - 1) {
                    res.push(cur.val);
                }
            }
        }

        return res;
    }
}
