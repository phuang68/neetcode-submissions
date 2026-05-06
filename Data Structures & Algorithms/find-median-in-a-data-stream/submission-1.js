class MedianFinder {
    constructor() {
      this.large = new MinPriorityQueue();
      this.small = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
      if(this.large.size() > 0 && num > this.large.front()) {
        this.large.enqueue(num);
      } else {
        this.small.enqueue(num);
      }

      if(this.large.size() - this.small.size() > 1) {
        this.small.enqueue(this.large.dequeue());
      } else if(this.small.size() - this.large.size() > 1) {
        this.large.enqueue(this.small.dequeue());
      }
    }

    /**
     * @return {number}
     */
    findMedian() {
      if(this.large.size() > this.small.size()) {
        return this.large.front();
      } else if(this.large.size() < this.small.size()) {
        return this.small.front();
      } else {
        return (this.large.front() + this.small.front()) / 2;
      }
    }
}
