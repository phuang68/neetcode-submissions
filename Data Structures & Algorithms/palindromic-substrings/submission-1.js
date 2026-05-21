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

        // Doing it from backwards for checking dp[l + 1][r - 1] when substring is longer than 3
        for(let l = n - 1; l >= 0; l--) {
            for(let r = l; r < n; r++) {
                // r - l <= 2 means a, aa, aba are all valid palindrome
                if(s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                    pCount++;
                    dp[l][r] = true;
                }
            }
        }

        return pCount;
    }
}
