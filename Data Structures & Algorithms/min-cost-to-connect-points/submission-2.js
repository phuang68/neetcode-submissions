class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        // Create adjacency list on every point
        const graph = {};
        for(let i = 0; i < points.length; i++) {
            for(let j = i + 1; j < points.length; j++) {
                if(i !== j) {
                    const weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);

                    if(!graph[i]) graph[i] = [];
                    if(!graph[j]) graph[j] = [];

                    graph[i].push([weight, j]);
                    graph[j].push([weight, i]);
                }
            }
        }

        // A hash set to avoid duplicate node
        const visit = new Set();

        // Minheap to make sure each edge we traverse is the min cost
        const minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
        minHeap.enqueue([0, 0]);
        let cost = 0;

        // BFS to find each point’s frontier
        while(visit.size < points.length) {
            const [weight, point] = minHeap.dequeue();
            
            if(visit.has(point)) continue;
            visit.add(point);

            for(const nei of graph[point] || []) {
                if(visit.has(nei[1])) continue;

                minHeap.enqueue(nei);
            }

            cost += weight;
        }

        return cost;
    }
}
