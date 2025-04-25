/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levelMap = {};
    treeTraverse( root, levelMap, 0 );

    const result = [];
    for (const [key, value] of Object.entries(levelMap)) {
        result.push( value );
    }

    return result;
};

var treeTraverse = function( root, levelMap, parentLevel ) {
    if ( ! root ) {
        return root;
    }

    const myLevel = parentLevel + 1;

    if ( ! levelMap[ myLevel ] ) {
        levelMap[ myLevel ] = [ root.val ];
    } else {
        levelMap[ myLevel ].push( root.val );
    }

    treeTraverse( root.left, levelMap, myLevel );
    treeTraverse( root.right, levelMap, myLevel );
}