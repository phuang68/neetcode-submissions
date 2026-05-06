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
     * @return {number}
     */
    goodNodes(root) {
        this.count = 0;
        this.traverseWithMax(root, root.val);
        return this.count;
    }

    traverseWithMax(node, max) {
        if(node === null) return;

        if(node.val >= max) {
            this.count++;
        }

        let curMax = Math.max(node.val, max);

        this.traverseWithMax(node.left,curMax);
        this.traverseWithMax(node.right, curMax);
    }
}
