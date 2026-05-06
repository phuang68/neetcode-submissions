class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0;
        let time = 0;
        const queue = [];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];


        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 2) {
                    queue.push([r,c]);
                }
                if(grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        while(fresh > 0 && queue.length > 0) {
            let size = queue.length;
            
            for(let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for(const [v, h] of directions) {
                    const nr = r + v, nc = c + h;

                    if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }

            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
