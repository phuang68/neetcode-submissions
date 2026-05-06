class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        const visited = new Set();
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const inRange = (left, right, i) => {
            return left <= i && i < right;
        }
        const bfs = (r, c) => {
            const queue = [];
            queue.push([r, c]);
            visited.add(`${r},${c}`);
            const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];

            while(queue.length > 0) {
                const [i, j] = queue.shift();
                for(const dir of DIR) {
                    let ver = i + dir[0], hor = j + dir[1];

                    if(inRange(0, ROWS, ver) 
                    && inRange(0, COLS, hor)
                    && !visited.has(`${ver},${hor}`)
                    && grid[ver][hor] !== "0") {
                        queue.push([ver, hor]);
                        visited.add(`${ver},${hor}`);
                    }
                }
            }
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(!visited.has(`${r},${c}`) && grid[r][c] === "1") {
                    bfs(r, c);
                    res++;
                }
            }
        }

        return res;
    }
}
