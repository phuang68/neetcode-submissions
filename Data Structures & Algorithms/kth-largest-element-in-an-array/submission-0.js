class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
      const maxHeap = new MaxPriorityQueue();

      for(const num of nums) {
         maxHeap.enqueue(num);
      }

      while(k > 1) {
        maxHeap.dequeue();
        k--;
      }

      return maxHeap.front();
    }
}
