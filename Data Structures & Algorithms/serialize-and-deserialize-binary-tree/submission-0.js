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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
      this.res = [];
      this.preTraverse(root);
      return this.res.join(',');
    }

    preTraverse(node) {
      if(node === null) {
        this.res.push('N');
        return;
      }

      this.res.push(node.val);
      this.preTraverse(node.left);
      this.preTraverse(node.right);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
      const vals = data.split(',');
      this.index = 0;
      return this.dePreTraverse(vals);
    }

    dePreTraverse(vals){
      if(vals[this.index] === 'N'){
        this.index++;
        return null;
      }

      const root = new TreeNode(parseInt(vals[this.index]));
      this.index++;

      root.left = this.dePreTraverse(vals);
      root.right = this.dePreTraverse(vals);

      return root;
    }
}
