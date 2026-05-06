class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];
        const chessboard = Array.from({length: n}, () => new Array(n).fill('.'));

        const isValid = (board, row, col) => {
            // Vertical check
            for(let i = 0; i < row; i++) {
                if(board[i][col] === 'Q') return false;
            }
            // Upper left Diagonal check
            for(let i = row - 1, j = col - 1; i >= 0 && j>= 0; i--, j--) {
                if(board[i][j] === 'Q') return false;
            }

            // Upper right Diagonal check
            for(let i = row - 1, j = col + 1; i >=0 && j < n; i--, j++) {
                if(board[i][j] === 'Q') return false;
            }

            return true;
        }

        const transformBoard = (board) => {
            let collect = [];

            for(let i = 0; i < n; i++) {
                collect.push(board[i].join(''));
            }

            return collect;
        }

        const bt = (row) => {
            if(row === n) {
                res.push(transformBoard(chessboard));
                return;
            }

            for(let col = 0; col < n; col++) {
                if(isValid(chessboard, row, col)) {
                    chessboard[row][col] = 'Q';
                    bt(row + 1);
                    chessboard[row][col] = '.';
                }
            }
        }

        bt(0);

        return res;
    }
}
