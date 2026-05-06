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
     * @return {boolean}
     */
    isBalanced(root) {
        this.isBalanced = true;

        this.getHeight(root);

        return this.isBalanced;
    }

    getHeight(node){
        if(node === null) return 0;

        let left = this.getHeight(node.left);
        let right = this.getHeight(node.right);

        if(Math.abs(left - right) > 1) {
            this.isBalanced = false;
        }

        return 1 + Math.max(left, right);
    }
}
