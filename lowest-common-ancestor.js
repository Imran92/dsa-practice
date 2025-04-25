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
    const location = {
        point: null
    };

    goDeep( root, p, q, location );

    return location.point;
};

var goDeep = function( root, p, q, location ) {
    if ( ! root ) {
        return 0;
    }

    if ( location.point ) {
        return 0;
    }

    const leftVal = goDeep( root.left, p, q, location );
    const rightVal = goDeep( root.right, p, q, location );

    const thisVal = ( root.val === p.val || root.val === q.val ) ? 1 : 0;

    const total = thisVal + leftVal + rightVal;

    if ( total === 2 && ! location.point ) {
        location.point = root;
    }

    return total;
}