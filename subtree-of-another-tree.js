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
        const roots = [];
        this.findMatchingRoots(root,subRoot,roots);
        
        for( let i = 0; i < roots.length; i++ ) {
            if (this.isSameTree(roots[i], subRoot)) return true;
        }
        return false;
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @param {Array} roots
     */
    findMatchingRoots(root, subRoot, roots){
        if (!root)
            return false;
        if(root.val === subRoot.val) roots.push(root);
        this.findMatchingRoots(root.left, subRoot, roots);
        this.findMatchingRoots(root.right, subRoot, roots);
    }

    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if ( p === null && q === null)
            return true;
        if ( p === null || q === null)
            return false;
        if(p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right,q.right);
        } else {
            return false;
        }
    }
}
