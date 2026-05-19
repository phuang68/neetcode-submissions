class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        // Graph - ajacency list with cost
        const graph = {};
        const dist = {};
        for(let i = 0; i < n; i++) {
            graph[i] = [];
            dist[i] = new Array(n).fill(Infinity); // At most each node with stopsUsed cost different, we only update when there's a better cost
        }

        for(const flight of flights) {
            const [src, dst, price] = flight;

            graph[src].push([price, dst]);
        }

        // Min heap to always go to the lowest cost 
        const minHeap = new MinPriorityQueue(i => i[0]);
        dist[src][0] = 0; // no cost is needed with no step at the src
        minHeap.push([0, src, -1]); // the src doesn't count as a step

        // BFS - with minHeap also keep track of the min cost of the neibourgh node at step x
        while(!minHeap.isEmpty()) {
            const [cost, node, stops] = minHeap.pop();

            if(node === dst) {
                return cost;
            }

            if(stops === k || dist[node][stops + 1] < cost) { // if at most k stops, we still haven't reached dst or we know at current we don't have lower cost, it's not a good path
                continue;
            }

            for(const [price, nei] of graph[node]) {
                const nextCost = cost + price;
                const nextStops = stops + 1;
                if(dist[nei][nextStops + 1] > nextCost) {
                    dist[nei][nextStops + 1] = nextCost; // Update cost of stops used
                    minHeap.push([nextCost, nei, nextStops]);
                }
            }
        }

        return -1;
    }
}
