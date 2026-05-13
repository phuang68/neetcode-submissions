class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // Graph - adjacency list
        const graph = {};
        for(const [u, v, t] of times) {
            if(graph[u] === undefined) {
                graph[u] = [];
            }
            graph[u].push([v, t]);
        }

        // BFS - Min heap to for traversal
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        minHeap.enqueue([0, k]);
        let t = 0;
        // Visit - set to avoid duplicate visit
        const visit = new Set();

        while(!minHeap.isEmpty()) {
            const [curT, curN] = minHeap.dequeue();

            // Avoid duplicate visit on its neighbour
            if(visit.has(curN)) continue;

            visit.add(curN);

            for(const [v, t] of graph[curN] || []) {
                if(visit.has(v)) continue;

                minHeap.enqueue([curT + t, v]);
            }

            t = Math.max(curT, t);
        }

        return visit.size === n ? t : -1;
    }
}
