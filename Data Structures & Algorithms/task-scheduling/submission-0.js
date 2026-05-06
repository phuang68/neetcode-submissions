class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
      const queue = [];
      const maxHeap = new MaxPriorityQueue();
      const map = {};

      for(const task of tasks){
         if(map[task] !== undefined) {
            map[task] += 1;
         } else {
            map[task] = 1;
         }
      }

      for(const key in map){
         maxHeap.enqueue(map[key]);
      }

      let time = 0;

      while(queue.length > 0 || maxHeap.size() > 0){
        time++;

        if(maxHeap.size() > 0) {
          let cur = maxHeap.dequeue() - 1;
          if(cur !== 0) {
            queue.push([cur, time + n]);
          }
        }

        if(queue.length && queue[0][1] === time) {
          let next = queue.shift();

          maxHeap.enqueue(next[0]);
        }
      }

      return time;
    }
}
