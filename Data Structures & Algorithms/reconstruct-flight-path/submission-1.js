class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        // Build graph - adjacency list
        const graph = {}
        tickets.sort();

        for(const [f, t] of tickets) {
            if(!graph[f]) graph[f] = [];
            graph[f].push(t);
        }

        const path = ['JFK'];
        // DFS - construct result, each neighbour should be sorted 
        const dfs = (node) => {
            if(path.length === tickets.length + 1) {
                return true;
            }
            if(!graph[node]) { return false; }

            const temp = [...graph[node]];

            for(let i = 0; i < temp.length; i++) {
                const v = temp[i];
                graph[node].splice(i, 1);
                path.push(v)
                if(dfs(v)) return true;
                path.pop();
                graph[node].splice(i, 0, v);
            }

            return false;
        }

        dfs('JFK');

        return path;
    }
}
