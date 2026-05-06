class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pac = new Set();
        const alt = new Set();
        const res = [];

        // DFS only do dfs on valid cell
        const dfs = (r, c, visit, prevH) => {
            if(r < 0 || c < 0 || r === ROWS || c === COLS || visit.has(`${r}, ${c}`) || heights[r][c] < prevH) {
                return;
            }

            visit.add(`${r}, ${c}`);

            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }

        // Expand row pac and alt
        for(let c = 0; c < COLS; c++) {
            dfs(0, c, pac, 0);
            dfs(ROWS - 1, c, alt, 0);
        }

        // Expand col pac and alt
        for(let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac, 0);
            dfs(r, COLS - 1, alt, 0);
        }

        // Check if cur cell in pac and alt
        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(pac.has(`${r}, ${c}`) && alt.has(`${r}, ${c}`)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
