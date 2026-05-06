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
        
        const bfs = (r, c) => {
            const queue = [];
            queue.push([r, c]);
            grid[r][c] = 0;
            let area = 0;

            while(queue.length > 0) {
                const [cr, cc] = queue.shift();
                area++;

                for(const [v, h] of DIR) {
                    const nr = cr + v, nc = cc + h;
                    if(inRange(0, ROWS, nr) && inRange(0, COLS, nc) && grid[nr][nc] === 1){
                        queue.push([nr, nc]);
                        grid[nr][nc] = 0;
                    }
                }
            }

            return area;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    res = Math.max(res, bfs(r,c));
                }
            }
        }

        return res;
    }
}