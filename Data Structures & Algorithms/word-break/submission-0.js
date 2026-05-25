class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // DP array to store at each idx, whether it can match a word in wordDict
        const len = s.length;
        const dp = new Array(len + 1).fill(false);
        dp[len] = true;

        for(let i = len - 1; i >= 0; i--) {
            for(const word of wordDict) {
                // Avoid going through the dict once we know we have match at that position
                if(dp[i] === true) break;
                const l = word.length;
                if(i + l <= len && s.slice(i, i + l) === word) {
                    dp[i] = dp[i + l];
                }
            }
        }

        return dp[0];
    }
}
