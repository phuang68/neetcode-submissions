class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Check each row
        for(let i = 0; i < 9; i++){
            const rowS = new Set();
            for(let j = 0; j < 9; j++) {
                let e = parseInt(board[i][j]);
                if(rowS.has(e) && !isNaN(e)) return false;
                rowS.add(e);
            }
        }

        // Check each column
        for(let i = 0; i < 9; i++){
            const colS = new Set();
            for(let j = 0; j < 9; j++) {
                let e = parseInt(board[j][i]);
                if(colS.has(e) && !isNaN(e)) return false;
                colS.add(e);
            }
        }
        // Check each 3*3 grid
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                const gridS = new Set();
                let rB = 3 * (i + 1);
                let cB = 3 * (j + 1);
                for(let r = 3 * i; r < rB; r++) {
                    for(let c = 3 * j; c < cB; c++) {
                        let e = parseInt(board[r][c])
                        if(gridS.has(e) && !isNaN(e)) { return false; }
                        gridS.add(e);
                    }
                }
            }
        }

        return true;
    }
}
