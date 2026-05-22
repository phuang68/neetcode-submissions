class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // DP: Top to bottom
        const n = s.length;

        const dp = new Array(n).fill(0);

        // Handle single character situation
        dp[n] = 1;

        for(let i = n - 1; i >= 0; i--) {
            // Verify if it's 0, if it's 0 anything after that can't be map to a character
            if(Number(s[i]) === 0) {
                dp[i] = 0;
            } else {
                dp[i] = dp[i + 1];
                if(i + 1 < n) {
                    if(Number(s[i]) === 1 || Number(s[i]) === 2 && Number(s[i + 1]) <= 6) {
                        dp[i] += dp[i + 2];
                    }
                }
            }
        }

        return dp[0];
    }
}
