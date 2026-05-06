class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.idx = -1;
        this.refs = 0;
    }

    addWord(word, i) {
        let cur = this;
        cur.refs++;

        for(const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if(cur.children[index] === null) {
                cur.children[index] = new TrieNode();
            }
            cur = cur.children[index];
        }

        cur.idx = i;
    }
}

class Solution {
    getId(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
    const res = [];
    const ROWS = board.length;
    const COLS = board[0].length;

    const root = new TrieNode();
    // Build Trie
    for (let i = 0; i < words.length; i++) {
            root.addWord(words[i], i);
    }
    // Backtracking method with visited
    const dfs = (r, c, node) => {
        if(r >= ROWS || c >= COLS || r < 0 || c < 0 || board[r][c] === '*' || node.children[this.getId(board[r][c])] === null) {
            return;
        }


        let char = board[r][c];
        board[r][c] = '*';
        let prev = node;
        node = node.children[this.getId(char)];
        if(node.idx !== -1) {
            res.push(words[node.idx]);
            node.idx = -1;
            node.refs--;

            if(node.refs === 0) {
                prev.children[this.getId(char)] === null;
                node = null;
                board[r][c] = char;
                return;
            }
        }

        // iterate in all directions for next
        dfs(r + 1, c, node);
        dfs(r, c + 1, node);
        dfs(r - 1, c, node);
        dfs(r, c - 1, node);

        board[r][c] = char;
    }

    // Every character can be a starting point
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            dfs(i, j, root)
        }
    }

    return Array.from(res);
    }
}
