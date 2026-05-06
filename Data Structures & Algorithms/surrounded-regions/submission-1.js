class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const stack = [];

        // Mark all unsurrounded cells on the boarder
        for(let c = 0; c < COLS; c++) {
            if(board[0][c] === 'O') {
                stack.push([0, c]);
            }
            if(board[ROWS - 1][c] === 'O'){ 
                stack.push([ROWS - 1, c]);
            }
        }
        for(let r = 0; r < ROWS; r++) {
            if(board[r][0] === 'O') {
                stack.push([r, 0]);
            }
            if(board[r][COLS - 1] === 'O') {
                stack.push([r, COLS - 1]);
            }
        }
        // DFS - Go through each cell and mark ajacent O with T
        const dfs = (r, c) => {
            if(r < 0 || r === ROWS || c < 0 || c === COLS || board[r][c] !== 'O') {
                return;
            }
            
            board[r][c] = 'T';
            
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        while(stack.length > 0) {
            const [r, c] = stack.pop();
            dfs(r, c);
        }

        console.log(stack)
        // Rest of the O should be X
        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] === 'O') board[r][c] = 'X';
                if(board[r][c] === 'T') board[r][c] = 'O';
            }
        }
        // Return result
    }
}
