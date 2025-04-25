class LRUCache {
    capacity = 0;
    size = 0;
    locationMap = {};
    head = undefined;
    tail = undefined;

    constructor ( c ) {
        this.capacity = c;
        this.size = 0;
        this.locationMap = new Map();
    }

    get( key ) {
        const mem = this.locationMap.get( key );
        if (  mem === undefined ) {
            return -1;
        }

        if ( mem === this.tail && mem.prev ) {
            this.tail = mem.prev;
            mem.prev.next = undefined;
        }

        if ( mem === this.head ) {
            return this.head.value;
        }

        if ( mem.prev ) {
            mem.prev.next = mem.next;
        }

        if ( mem.next ) {
            mem.next.prev = mem.prev;
        }

        const tempHead = this.head;
        this.head = mem;
        mem.next = tempHead;
        tempHead.prev = this.head;
        mem.prev = undefined;
        return mem.value;
    }

    put ( key, value ) {
        const tempMem = {
            key,
            value,
            prev: undefined,
            next: undefined,
        };
        let mem = this.locationMap.get( key );

        if (  mem !== undefined ) {
            this.get( key );
            mem.value = value;
            return value;
        }

        if ( this.size === this.capacity ) {    
            this.locationMap.delete( this.tail.key );
            this.size--;

            if ( this.tail?.prev ) {
                this.tail.prev.next = undefined;
                this.tail = this.tail.prev;
            }
        }

        if ( this.head ) {
            this.head.prev = tempMem;
            tempMem.next = this.head;
        }


        if ( ! this.tail ) {
            this.tail = tempMem;
        }

        this.head = tempMem;
        this.size++;

        this.locationMap.set( key, tempMem );

        return null;
    }
}