class MinStack {
    constructor() {
        this.minStack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.minStack.length === 0 ? val : this.getMin());
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length > 0){
            this.min = this.minStack.pop();
        } else {
            this.min = null;
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
