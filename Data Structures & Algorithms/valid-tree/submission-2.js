class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // Valid tree: # of edges should be n - 1
        if(edges.length !== n - 1) return false;

        // Build graph
        const graph = Array.from({length: n}, () => []);

        for(const [n1, n2] of edges) {
            graph[n1].push(n2);
            graph[n2].push(n1);
        } 

        // Valid tree: no cycle, dfs to detect cycle, parent doesn't count since graph is undirected
        const visit = new Set();
        const dfs = (node, parent) => {
            if(visit.has(node)) return false;

            visit.add(node);

            for(let nei of graph[node]) {
                if(nei === parent) continue;

                if(!dfs(nei, node)) {
                    return false;
                }
            }

            return true;
        }

        // Valid tree: no isolated nodes
        return dfs(0, -1) && visit.size === n;
    }
}
