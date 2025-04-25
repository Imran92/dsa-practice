class MinStack {
    stack = [];
    minStack = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if ( ! this.minStack.length || val <= this.getMin() ) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const element = this.stack.pop();
        if ( element === this.getMin() ) {
            this.minStack.pop();
        }
        return element;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[ this.stack.length - 1 ];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[ this.minStack.length - 1 ];
    }
}
