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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.count = 0;
        this.val = undefined;

        this.inOrderTraversal(root, k);

        return this.val;
    }

    inOrderTraversal(node, k) {
        if(!node) return;

        this.inOrderTraversal(node.left, k);

        this.count++;

        if(this.count === k) {
            this.val= node.val;
        }

        this.inOrderTraversal(node.right, k);
    }
}
