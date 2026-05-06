class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const path = [];

        const bt = (open, close) => {
            if(close === n && open === n) {
                res.push(path.join(''));
                return;
            }

            if(open < n) {
                path.push('(');
                bt(open + 1, close);
                path.pop();
            }

            if(close < open) {
                path.push(')');
                bt(open, close + 1);
                path.pop();
            }
        }

        bt(0, 0);

        return res;
    }
}
