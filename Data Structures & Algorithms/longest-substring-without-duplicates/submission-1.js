class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        let pos = 0;
        let move = 0;
        const charSet = new Set();

        while(move < s.length){
            // Make sure starting point is unique
            while(charSet.has(s[move])){
                charSet.delete(s[pos]);
                pos++;
            }

            charSet.add(s[move]);
            max = Math.max(max, move - pos + 1);
            move++;
        }

        return max;
    }
}
