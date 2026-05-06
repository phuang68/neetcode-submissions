class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
       const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const INF = 2147483647;

    const q = [];

    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            if(grid[r][c] === 0){
                q.push([r, c]);
            }
        }

    }
    while(q.length > 0) {
        const [row, col] = q.shift();
        for (let [dr, dc] of directions) {
            const nr = row + dr,
                nc = col + dc;
            if (
                nr >= 0 &&
                nr < ROWS &&
                nc >= 0 &&
                nc < COLS &&
                grid[nr][nc] === INF
            ) {
                grid[nr][nc] = grid[row][col] + 1;
                q.push([nr, nc]);
            }
        }
    }
    }
}