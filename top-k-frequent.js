/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numMap = {};

    for( let i = 0; i < nums.length; i++ ) {
        numMap[ nums[i] ] = numMap[ nums[i] ] ? numMap[ nums[i] ] + 1 : 1;
    }

    const maxHeap = new MaxHeap();
    for( const num in numMap ) {
        maxHeap.insert( { val: num, priority: numMap[ num ]} );
    }

    const result = [];
    for( let i = 0; i < k; i++ ) {
        const item = maxHeap.remove();
        result.push( item );
    }
    return result.map( item => parseInt( item.val ) );
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert( item ) {
        this.heap.push( item );
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;

        while ( index > 0 ) {
            let element = this.heap[index];
            let parentIndex = Math.floor( ( index - 1 ) / 2);

            let parent = this.heap[parentIndex];

            if ( element.priority <= parent.priority ) {
                break;
            }
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        } 
    }
    heapifyDown() {
        const length = this.heap.length;
        let index = 0;

        while ( true ) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;

            let parent = this.heap[largest];

            if ( leftChildIndex < length && this.heap[leftChildIndex].priority > this.heap[largest].priority ) {
                largest = leftChildIndex;
            }

            if ( rightChildIndex < length && this.heap[rightChildIndex].priority > this.heap[largest].priority ) {
                largest = rightChildIndex;
            }

            if ( largest === index ) {
                break;
            }
            let largestElement = this.heap[largest];
            this.heap[largest] = parent;
            this.heap[index] = largestElement;
            index = largest;
        }
    }
    remove() {
        const root = this.heap[0];
        if ( this.heap.length > 0 ) {
            const end = this.heap.pop();
            this.heap[0] = end;
            this.heapifyDown();
        }
        return root;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    peek() {
        return this.heap[0] ? this.heap[0].value : null;
    }
}

console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6)); // [1, 2]