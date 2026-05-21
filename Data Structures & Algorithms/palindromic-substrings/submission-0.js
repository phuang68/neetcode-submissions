class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // DP
        const n = s.length;
        const dp = Array.from({length: n}, () => Array(n).fill(false))
        let pCount = 0;

        for(let l = n - 1; l >= 0; l--) {
            for(let r = l; r < n; r++) {
                if(s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                    pCount++;
                    dp[l][r] = true;
                }
            }
        }

        return pCount;
    }
}
