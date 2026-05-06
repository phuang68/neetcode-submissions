class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
      const maxHeap = new MaxPriorityQueue((point) => point[0]);
      const res =[]

      for(const [x, y] of points) {
        const dist = x ** 2 + y ** 2;
        maxHeap.enqueue([dist, x, y]);
      }

      while(maxHeap.size() > k) {
        maxHeap.dequeue();
      }

      for(let i = 0; i < k; i++){
        const [_, x, y] = maxHeap.dequeue();
        res.push([x, y]);
      }

      return res;
    }
}
