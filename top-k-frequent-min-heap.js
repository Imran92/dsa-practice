/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = nums.reduce( ( prev, num ) => {
        prev[num] = prev[num] ? prev[num] + 1 : 1
        return prev;
    }, {} );
    const minHeap = new MinHeap();

    Object.keys( freqMap ).forEach( ( num ) => {
        minHeap.insert( num, freqMap[ num ] );
        if ( minHeap.stack.length > k ) minHeap.pop();
    } );
    console.log( minHeap.stack );

    const result = [];
    while ( minHeap.stack.length ) {
        result.push( parseInt( minHeap.pop().num ) );
    }

    return result.reverse();
};

class MinHeap {
    stack = [];

    heapifyUp( i ) {
        if ( i <= 0 ) return;

        const parentIndex = this.getParent( i );

        if ( this.stack[i].count >= this.stack[parentIndex].count ) {
            return;
        }

        [ this.stack[i], this.stack[parentIndex] ] = [ this.stack[parentIndex], this.stack[i] ];

        this.heapifyUp( parentIndex );
    }

    heapifyDown( i = 0 ) {
        if ( i >= this.stack.length ) return;

        const n = this.stack.length;
        const leftChild = this.leftChild(i);
        const rightChild = this.rightChild(i);

        let minIndex = i;

        if ( leftChild < n && this.stack[leftChild].count < this.stack[minIndex].count ) minIndex = leftChild;
        if ( rightChild < n && this.stack[rightChild].count < this.stack[minIndex].count ) minIndex = rightChild;

        if ( minIndex === i ) return;

        [ this.stack[minIndex], this.stack[i] ] = [ this.stack[i], this.stack[minIndex] ];

        this.heapifyDown( minIndex );
    }

    pop() {
        if ( ! this.stack.length ) return null;
        if ( this.stack.length === 1 ) return this.stack.pop();
        const firstItem = this.stack[0];
        this.stack[0] = this.stack.pop();
        this.heapifyDown();
        return firstItem;
    }

    insert( num, count ) {
        this.stack.push( { num, count } );
        this.heapifyUp( this.stack.length - 1 );
    }

    leftChild = ( i ) => i * 2 + 1;
    rightChild = ( i ) => i * 2 + 2;
    getParent = ( i ) =>  Math.floor( ( i - 1 ) / 2 );
}