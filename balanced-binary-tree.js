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
        const ans = this.checkBalance(root);
        return ans === false ? false : true;
    }

    /**
     * @param {TreeNode} root
     * @return {boolean|number}
     */
    checkBalance(root) {
        if (!root)
            return 0;
        const leftHeight = this.checkBalance(root.left);
        const rightHeight = this.checkBalance(root.right);

        if (leftHeight === false || rightHeight === false)
            return false;
        if (Math.abs(leftHeight - rightHeight) > 1)
            return false;
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
