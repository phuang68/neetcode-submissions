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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;

        if(!root) return false;

        const subtreeFromRoot = this.sameTree(root, subRoot);
        const subtreeFromLeft = this.isSubtree(root.left, subRoot);
        const subtreeFromRight = this.isSubtree(root.right, subRoot);

        return subtreeFromRoot || subtreeFromLeft || subtreeFromRight;
    }

    sameTree(root1, root2) {
        if(!root1 && !root2) return true;
        if(!root1 || !root2 || root1.val !== root2.val) {
            return false;
        }

        return this.sameTree(root1.left, root2.left) && this.sameTree(root1.right, root2.right);
    }
}
