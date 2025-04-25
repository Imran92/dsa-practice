class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const maxHeap = new MaxHeap( k );

        const frequencyMap = {};

        for ( let i = 0; i < nums.length; i++ ) {
            frequencyMap[nums[i]] = frequencyMap[nums[i]] ? frequencyMap[nums[i]] + 1 : 1;
        }
        console.log( frequencyMap );
        const chars = Object.keys( frequencyMap );

        for ( let i = 0; i < chars.length; i++ ) {
            maxHeap.insert( { val: chars[i], priority:frequencyMap[chars[i]] } );
        }

        const result = [];

        while( maxHeap.peek() ) {
            result.push( maxHeap.getTop().val );
        }

        return result;
    }
}


class MaxHeap {
    capacity = 0;
    size = 0;
    heap = [];

    constructor( capacity ) {
        this.capacity = capacity;
    }

    heapifyDown( index ) {
        let largest = index;
        let left = this.getLeftChildIndex( index );
        let right = this.getRightChildIndex( index );

        if ( left < this.size && this.heap[left].priority > this.heap[largest].priority ) {
            largest = left;
        }

        if ( right < this.size && this.heap[right].priority > this.heap[largest].priority ) {
            largest = right;
        }

        if ( largest !== index ) {
            this.swap( largest, index );
            this.heapifyDown( largest );
        }
    }

    heapifyUp( index ) {
        if ( index < 1 ) {
            return;
        }

        let parent = Math.floor( ( index - 1 ) / 2 );
        if ( this.heap[ parent ].priority < this.heap[ index ].priority ) {
            this.swap( parent, index )
            this.heapifyUp( parent );
        }
    }

    peek() {
        return this.size ? this.heap[0] : null;
    }

    getLast() {
        return this.heap[ this.size - 1 ];
    }

    insert( item ) {
        if ( this.size === this.capacity && item.priority < this.getLast().priority ) {
            return;
        }

        this.heap[ Math.min( this.heap.length, this.capacity - 1 ) ] = item;
        this.size = this.heap.length;
        this.heapifyUp( this.size - 1 );
    }

    getTop() {
        const top = this.heap[0];
        const last = this.heap.pop();
        this.size = this.heap.length;
        if ( this.size ) {
            this.heap[0] = last;
            this.heapifyDown( 0 );
        }
        return top;
    }

    getLeftChildIndex = index => index * 2 + 1;
    getRightChildIndex = index => index * 2 + 2;

    swap( i, j ) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

console.log( ( new Solution() ).topKFrequent( [-1,1,4,-4,3,5,4,-2,3,-1], 3 ) );