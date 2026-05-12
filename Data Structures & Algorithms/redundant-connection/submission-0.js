class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);
        const rank = new Array(edges.length + 1).fill(1);


        const find = (n) => {
            if(n !== parent[n]) return find(parent[n]);
            return n;
        }

        const union = (n1, n2) => {
            const p1 = find(n1);
            const p2 = find(n2);
            if(p1 === p2) return false;

            if(rank[p1] > rank[p2]) {
                parent[p2] = p1
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        }

        // Go through each edge to form u-f, existing union = cycle introduced
        for(const [n1, n2] of edges) {
            if(!union(n1, n2)) {
                return [n1, n2];
            }
        }

    }
}
