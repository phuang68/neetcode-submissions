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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root.val === p.val && this.hasNode(root, q) || root.val === q.val && this.hasNode(root, p)) {
            return root;
        }

        if(root.val > p.val && root.val > q.val) {
           return this.lowestCommonAncestor(root.left, p, q);
        }

        if(root.val < p.val && root.val < q.val) {
           return this.lowestCommonAncestor(root.right, p, q);
        }

        return root;
    }

    hasNode(p, q) {
        if(!p) return false;

        if(p.val === q.val) return true;

        if(p.val < q.val) {
            return this.hasNode(p.right, q);
        } else {
            return this.hasNode(p.left, q);
        }
    }
}
