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
    diameterOfBinaryTree(root) {
        this.max = 0;
        this.findDiameter(root);

        return this.max;
    }

    findDiameter(node) {
        if(node === null) return 0;

        const leftDeep = this.findDiameter(node.left);
        const rightDeep = this.findDiameter(node.right);
        this.max = Math.max(this.max,  leftDeep + rightDeep);

        return 1 + Math.max(leftDeep, rightDeep);
    }
}
