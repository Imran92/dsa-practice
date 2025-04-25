class MaxHeap {
    capacity = 0;
    size = 0;
    heap = [];

    constructor( capacity ) {
        this.capacity = capacity;
        this.heap = Array(capacity);
    }

    heapifyDown( index ) {
        let largest = index;
        let left = this.getLeftChildIndex( index );
        let right = this.getRightChildIndex( index );

        if ( left < size && heap[left].priority > heap[largest].priority ) {
            largest = left;
        }

        if ( right < size && heap[right].priority > heap[largest].priority ) {
            largest = right;
        }

        if ( largest !== index ) {
            this.swap( largest, index );
            this.heapifyDown( largest );
        }
    }

    heapifyUp( index ) {
        if ( index <= 0 ) {
            return;
        }

        let parent = ( index - 1 ) / 2;
        if ( this.heap[ parent ].priority < this.heap[ index ].priority ) {
            this.swap( parent, index )
            this.heapifyUp( parent );
        }
    }

    peek() {
        return this.heap[0];
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