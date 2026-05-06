class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647;

        const inRange = (left, right, v) => {
            return v >= left && v < right;
        }
        const bfs2 = (r, c) => {
            const q = new Queue([[r, c]]);
            const visit = Array.from({ length: ROWS }, () =>
                Array(COLS).fill(false),
            );
            visit[r][c] = true;
            let steps = 0;

            while (!q.isEmpty()) {
                let size = q.size();
                for (let i = 0; i < size; i++) {
                    const [row, col] = q.pop();
                    if (grid[row][col] === 0) return steps;
                    for (let [dr, dc] of directions) {
                        const nr = row + dr,
                            nc = col + dc;
                        if (
                            nr >= 0 &&
                            nr < ROWS &&
                            nc >= 0 &&
                            nc < COLS &&
                            !visit[nr][nc] &&
                            grid[nr][nc] !== -1
                        ) {
                            visit[nr][nc] = true;
                            q.push([nr, nc]);
                        }
                    }
                }
                steps++;
            }
            return INF;
        };

        const bfs = (r, c) => {
            let steps = 0;
            const visited = Array.from({length: ROWS}, () => new Array(COLS).fill(false));
            const queue = [];
            queue.push([r, c]);
            visited[r][c] = true;


            while(queue.length > 0) {
                let size = queue.length;
                
                for(let i = 0; i < size; i++) {
                    const [cr, cc] = queue.shift();

                    if(grid[cr][cc] === 0) return steps;

                    for(const [v, h] of DIR) {
                    let nr = cr + v, nc = cc + h;
                    if(inRange(0, ROWS, nr) && inRange(0, COLS, nc) && grid[nr][nc] !== -1 && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }

                steps++;
                }
            }

            return INF;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
               if(grid[r][c] === INF){ 
                    grid[r][c] = bfs2(r, c);
                }
            }
        }


    }
}
