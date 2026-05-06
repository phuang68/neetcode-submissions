class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Return smallest element without removing
  peek() {
    return this.heap[0] ?? null;
  }

  // Insert a value
  push(value) {
    this.heap.push(value);
    this.#bubbleUp(this.heap.length - 1);
  }

  // Remove and return smallest element
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#bubbleDown(0);
    return min;
  }

  size() {
    return this.heap.length;
  }

  #bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  #bubbleDown(index) {
    const length = this.heap.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
      this.minHeap = new MinHeap();
      this.k = k;

      for(const num of nums) {
        this.minHeap.push(num);
      }

      while(this.minHeap.size() > k) {
        this.minHeap.pop();
      }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
      this.minHeap.push(val);
      if(this.minHeap.size() > this.k) {
        this.minHeap.pop();
      }
      return this.minHeap.peek()
    }
}
