class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let maxf = 0;

        let count = new Map();

        for(let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            maxf = Math.max(maxf, count.get(s[r]));

            if(r - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            
            res = Math.max(res, r - l + 1);
        }

        
        return res;
    }
}
