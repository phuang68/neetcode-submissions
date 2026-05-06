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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // if empty in size, return empty node;
        if(preorder.length === 0) return null;

        // First element in preorder is the divide node
        let rootVal = preorder[0];
        let root = new TreeNode(rootVal);

        // Find divide node in inorder
        let div = 0;
        for(; div < inorder.length; div++) {
            if(inorder[div] === rootVal) break;
        }

        // Slpit left and right in inorder
        const inorderLeft = inorder.slice(0, div);
        const inorderRight = inorder.slice(div + 1, inorder.length);

        // Split left and right in preorder by inorder left and right size
        const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
        const preorderRight = preorder.slice(inorderLeft.length + 1, preorder.length);

        // Recursive build by divided pre and in
        root.left = this.buildTree(preorderLeft, inorderLeft);
        root.right = this.buildTree(preorderRight, inorderRight);

        return root;
    }
}
