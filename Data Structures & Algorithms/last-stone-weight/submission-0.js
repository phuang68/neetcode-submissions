class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
       const maxHeap = new MaxPriorityQueue();

       for(const stone of stones) {
          maxHeap.enqueue(stone);
       }

       while(maxHeap.size() > 1) {
          const stoneH1 = maxHeap.dequeue();
          const stoneH2 = maxHeap.dequeue();

          if(stoneH1 !== stoneH2) {
            maxHeap.enqueue(stoneH1 - stoneH2);
          }
       }

       return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
    }
}
