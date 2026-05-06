class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length;
        const COL = board[0].length;
        const visited = Array.from(({ length: ROW }), () => Array(COL).fill(false));

        const bt = (r, c, i) => {
            if(i === word.length) {
                return true;
            }

            if(r < 0 || c < 0 || r >= ROW || c >= COL || board[r][c] !== word[i] || visited[r][c]) {
                return false;
            }

            visited[r][c] = true;

            const res =  bt(r + 1, c, i + 1) ||
                bt(r - 1, c, i + 1) ||
                bt(r, c + 1, i + 1) ||
                bt(r, c - 1, i + 1);

            visited[r][c] = false;
            
            return res;
        }

       for(let r = 0; r < ROW; r++) {
            for(let c = 0; c < COL; c++) {
                if(bt(r, c, 0)) return true;
            }
       }

       return false;
    }
}
