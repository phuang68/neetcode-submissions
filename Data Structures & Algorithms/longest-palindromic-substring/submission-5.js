class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // DP
        let resIdx = 0, resLen = 0;
        const n = s.length;
        const dp = Array.from({length: n}, () => Array(n).fill(false));

        // Doing it backwards for later check of dp[i+1][j-1]
        for(let i = n - 1; i >= 0; i--) {
            for(let j = i; j < n; j++) {
                // j - i <= 2 handles a, aa, aba, they are all palindrome, if longer, its inner string should be palindrome too
                if(s[i] === s[j] && (j - i <= 2 || dp[i+1][j-1])) {
                    dp[i][j] = true;
                    if(resLen < j - i + 1) { // Update when palindrome is longer
                        resIdx = i;
                        resLen = j - i + 1;
                    }
                }
            }
        }

        return s.slice(resIdx, resIdx + resLen);
    }
}
