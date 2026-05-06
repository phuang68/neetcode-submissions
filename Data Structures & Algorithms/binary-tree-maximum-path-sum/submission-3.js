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
    maxPathSum(root) {
        // A global variable to keep track of max sum
        this.max = -Infinity;

        this.postTraversal(root);

        return this.max;
    }

    postTraversal(node) {
        if(!node) return 0;

        const leftSum = Math.max(this.postTraversal(node.left), 0);
        const rightSum = Math.max(this.postTraversal(node.right), 0);

        const totalSum = leftSum + rightSum + node.val;

        this.max = Math.max(totalSum, this.max);

        return node.val + Math.max(leftSum, rightSum);
    }


}
