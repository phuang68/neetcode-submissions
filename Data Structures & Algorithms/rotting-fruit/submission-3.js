class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let res = 0;
        const queue = [];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const dist = Array.from({length: ROWS}, () => Array(COLS).fill(Infinity));

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 2) {
                    queue.push([r,c]);
                    dist[r][c] = 0;
                }
            }
        }

        while(queue.length > 0) {
            const [r, c] = queue.shift();

            for(const [v, h] of directions) {
                const nr = r + v, nc = c + h;

                if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    dist[nr][nc] = dist[r][c] + 1;
                    res = Math.max(res, dist[nr][nc]);
                    queue.push([nr, nc]);
                }
            }
        }

         for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    return -1;
                }
            }
        }

        return res;
    }
}
