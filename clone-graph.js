/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if ( ! node ) {
        return;
    }

    const copyNode = {
        val : node.val,
        neighbors: [],
    };

    for ( let i = 0; i < node.neighbors.length; i++ ) {
        copyNode.neighbors.push( cloneGraph( node.neighbors[i] ) );
    }

    return copyNode;
};