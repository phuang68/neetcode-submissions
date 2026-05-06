class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = nums
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        this.minHeap.sort((a, b) => a - b);

        return this.minHeap[this.minHeap.length - this.k];
    }
}
