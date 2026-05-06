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
    isValidBST(root) {
        return this.traverseWithInterval(root, -Infinity, Infinity);
    }

    traverseWithInterval(node, min, max) {
        if(!node) return true;

        if(node.val > min && node.val < max) {
            return this.traverseWithInterval(node.left, min, node.val) 
                && this.traverseWithInterval(node.right, node.val, max);
        } else {
            return false;
        }
    }
}
