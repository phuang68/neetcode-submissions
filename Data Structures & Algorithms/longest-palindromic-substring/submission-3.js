class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // Brute force: spread from each char in s, keep track of the longest and the position
        let length = 0;
        let resIdx = 0;

        for(let i = 0; i < s.length; i++) {
            // Odd
            let r = i, l = i;

            while(l >= 0 && r < s.length && s[l] === s[r]) {
                if(r - l > length) {
                    length = r - l;
                    resIdx = l;
                }
                r++;
                l--;
            }

            // Even
            r = i + 1;
            l = i;

            while(l >= 0 && r < s.length && s[l] === s[r]) {
                if(r - l > length) {
                    resIdx = l
                    length = r - l;
                }
                r++;
                l--;
            }
        }

        return s.slice(resIdx, resIdx + length + 1)
    }
}
