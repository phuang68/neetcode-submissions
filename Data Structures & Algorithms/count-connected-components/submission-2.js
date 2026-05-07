class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // Build graph
        const graph = Array.from({ length: n }, () => []);

        for(const [n1, n2] of edges) {
            graph[n1].push(n2);
            graph[n2].push(n1);
        }

        // DFS to traverse available nodes
        const visit = new Set();
        const dfs = (node, parent) => {
            if(visit.has(node)) return;
            
            visit.add(node);

            for(const nei of graph[node]) {
                if(nei === parent) continue;
                dfs(nei, node);
            }
        }

        // For each entry of graph, only do dfs if nodes not visited and count
        let cluster = 0;
        for(let i = 0; i < n; i++) {
            if(!visit.has(i)) {
                dfs(i, -1);
                cluster++;
            }
        }

        return cluster;
    }
}
