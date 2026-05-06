class Node {
    constructor(val = 0, key = 0) {
        this.val = val;
        this.key = key;
        this.prev = null
        this.next = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map();
        this.least = new Node(0, 0);
        this.most = new Node(0, 0)
        this.least.next = this.most;
        this.most.prev = this.least;
    }

    // Remove node from linked list
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    // Insert node to end of linked list
    insert(node) {
        let mostPrev = this.most.prev;
        mostPrev.next = node;
        node.prev = mostPrev;
        node.next = this.most;
        this.most.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let newNode = new Node(value, key);
        // If has exsiting, update
        if(this.map.has(key)) {
            let node = this.map.get(key); 
            this.remove(node);
        } 
        this.map.set(key, newNode);
        this.insert(newNode);

        if(this.map.size > this.cap) {
            let leastNext = this.least.next;
            this.remove(leastNext);
            this.map.delete(leastNext.key)
        }
        
    }
}
