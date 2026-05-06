class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let i = 0; i < strs.length; i++) {
            res += strs[i].length + '*' + strs[i];
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let start = 0;
        while(start < str.length) {
            let end = start;
            while(str[end] !== '*' ){
                end++;
            }
            let leng = parseInt(str.slice(start, end));
            end++;
            res.push(str.slice(end, end + leng));
            start = end + leng;
        }
        return res;
    }
}
