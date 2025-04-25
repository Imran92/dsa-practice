/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    return detectCycle( head, head?.next?.next );
};

var detectCycle = ( head1, head2 ) => {
    if ( ! head1 || ! head2 ) {
        return false;
    }

    if ( head1 === head2 ) {
        return true;
    }

    return detectCycle( head1.next, head2.next?.next );
};

    