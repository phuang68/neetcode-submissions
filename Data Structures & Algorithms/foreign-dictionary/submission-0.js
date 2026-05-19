class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        // Topological solution
        const graph = {};
        const indegree = {};
        // Create node for each char
        for(const word of words) {
            for(const c of word) {
                graph[c] = new Set();
                indegree[c] = 0;
            }
        }

        // Build adjacency list as graph based on words
        for(let i = 1; i < words.length; i++) {
            const prev = words[i - 1];
            const cur = words[i];

            const minL = Math.min(prev.length, cur.length);

            if(prev.length > cur.length && prev.slice(0, minL) === cur.slice(0, minL)) return ""

            for(let j = 0; j < minL; j++) {
                if(prev[j] !== cur[j]) {
                    if(!graph[prev[j]].has(cur[j])) {
                        graph[prev[j]].add(cur[j]);
                        indegree[cur[j]] += 1; // Bookeeping its order
                    }
                    break;
                }
            }
        }

        // Build result during dfs
        const res = [];

        // BFS
        const q = [];
        for(const c in indegree) {
            if(indegree[c] === 0) {
                q.push(c);
            }
        }

        while(q.length > 0) {
            const c = q.shift();
            res.push(c);
            for(const nei of graph[c]) {
                indegree[nei] -= 1; // Every time its parent added to the path, its order bump up
                if(indegree[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        if(res.length !== Object.keys(indegree).length) { // if the end result doesn't have the same amount of character with orders, it is invalid
            return "";
        }

        return res.join('')
    }
}
