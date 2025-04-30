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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let stack = [root];
        let mp = new Map();

        mp.set( null, [ 0, 0 ] );

        while( stack.length > 0 ) {
            const lastNode = stack[ stack.length - 1 ];

            if ( lastNode.left && ! mp.has( lastNode.left ) ) {
                stack.push( lastNode.left );
            } else if ( lastNode.right && mp.has( lastNode.right ) ) {
                stack.push( lastNode.right );
            } else {
                const tempNode = stack.pop();

                const [ leftHeight, leftDiameter ] = mp.get( tempNode.left );
                const [ rightHeight, rightDiameter ] = mp.get( tempNode.right );

                const diameter = Math.max( leftDiameter, rightDiameter, leftHeight + rightHeight );
                const height = Math.max( leftHeight, rightHeight + 1 );

                mp.set( tempNode, [ height, diameter ] );
            }
        }

        return mp.get(root)[1];
    }
}
