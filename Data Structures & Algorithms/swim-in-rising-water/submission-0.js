class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        // minHeap - evaluate shortest time
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        const directions = [[0, 1], [0,-1], [1, 0], [-1, 0]];
        const N = grid.length;
        // Visit - avoid duplicate node visit
        const visit = new Set();
        minHeap.enqueue([grid[0][0], 0, 0]);
        visit.add("0+0");
        let res = -Infinity;
        let foundEnd = false;

        // BFS - to stretch way with shortest time
        while(!foundEnd) {
            const [time, x, y] = minHeap.dequeue();

            res = Math.max(time, res);

            if(x === N - 1 && y === N - 1) {
                foundEnd = true;
                break;
            }

            for(const [dirX, dirY] of directions) {
                const newX = x+dirX;
                const newY = y+dirY;

                if(newX < 0 || newY < 0 || newX >= N || newY >= N || visit.has(`${newX}+${newY}`)) {
                    continue;
                }

                visit.add(`${newX}+${newY}`);
                minHeap.enqueue([grid[newX][newY], newX, newY]);
            }
        }

        return res;
    }
}
