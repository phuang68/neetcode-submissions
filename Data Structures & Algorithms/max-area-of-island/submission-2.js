class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let res = 0;
        const ROWS = grid.length, COLS = grid[0].length;
        const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const inRange = (left, right, i) => {
            return left <= i && i < right;
        }
        
        const dfs = (r, c) => {
           if(!inRange(0, ROWS, r) || !inRange(0, COLS, c) || grid[r][c] === 0) {
                return 0;
           }
           
           let area = 1;
           grid[r][c] = 0;

           for(const [v, h] of DIR) {
              area += dfs(r + v, c + h);
           }
           
           return area;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    res = Math.max(res, dfs(r,c));
                }
            }
        }

        return res;
    }
}