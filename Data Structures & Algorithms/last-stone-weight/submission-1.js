class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.data = [];
    this.compare = comparator; // < 0 means a “higher priority” than b
  }

  // Basics
  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data[0];
  }

  // Insert
  push(value) {
    this.data.push(value);
    this._heapifyUp(this.data.length - 1);
  }

  // Remove top (min or max depending on comparator)
  pop() {
    if (this.data.length === 0) return undefined;
    if (this.data.length === 1) return this.data.pop();

    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown(0);
    return top;
  }

  // ----- Internal helpers -----
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _left(i) {
    return 2 * i + 1;
  }

  _right(i) {
    return 2 * i + 2;
  }

  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  _heapifyUp(i) {
    while (i > 0) {
      const p = this._parent(i);
      if (this.compare(this.data[i], this.data[p]) < 0) {
        this._swap(i, p);
        i = p;
      } else break;
    }
  }

  _heapifyDown(i) {
    const n = this.data.length;
    while (true) {
      const l = this._left(i);
      const r = this._right(i);
      let best = i;

      if (l < n && this.compare(this.data[l], this.data[best]) < 0) {
        best = l;
      }
      if (r < n && this.compare(this.data[r], this.data[best]) < 0) {
        best = r;
      }
      if (best === i) break;
      this._swap(i, best);
      i = best;
    }
  }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       const maxHeap = new Heap((a,b) => b - a);

       for(const stone of stones) {
          maxHeap.push(stone);
       }

       while(maxHeap.size() > 1) {
          const stoneH1 = maxHeap.pop();
          const stoneH2 = maxHeap.pop();

          if(stoneH1 !== stoneH2) {
            maxHeap.push(stoneH1 - stoneH2);
          }
       }

       return maxHeap.size() === 1 ? maxHeap.pop() : 0;
    }
}
