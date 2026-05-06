class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Validate row
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (rowSet.has(board[i][j]) && board[i][j] !=='.') {
                return false;
            };
            rowSet.add(board[i][j]);
        }
    }

    // Validate column
    for (let i = 0; i < 9; i++) {
        const columnSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (columnSet.has(board[j][i]) && board[j][i] !== '.') {
                return false;
            };
            columnSet.add(board[j][i]);
        }
    }

    // Validate each 3*3
    for (let x = 0; x < 9; x += 3) {
        for (let y = 0; y < 9; y += 3) {
            const boxSet = new Set();
            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    if (boxSet.has(board[i][j]) && board[i][j] !=='.') {
                        return false;
                    };
                    boxSet.add(board[i][j]);
                }
            }
        }
    }

    return true;
    }
}
