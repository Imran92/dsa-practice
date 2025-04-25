/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const min = p.val > q.val ? q : p;
    const max = min === p ? q : p;

    return findLCA( root, min, max );
};

var findLCA = ( root, p, q ) => {
    if ( ! root ) {
        return;
    }

    if ( root.val >=p.val && root.val <= q.val ) {
        return root;
    }

    if ( p.val > root.val ) {
        return lowestCommonAncestor( root.right, p, q );
    } else {
        return lowestCommonAncestor( root.left, p, q );
    }
}