class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        // at day i, 
        // state 0, hold stock
        // state 1, not holding stock because sold yesterday
        // state 2, not holding stock because sold stock today
        // state 3, at cooldown
        const dp = Array.from({length: n}, () => Array(4).fill(0));

        // at day 1
        dp[0][0] = -prices[0];

        for(let i = 1; i < n; i++) {
            // Either hold stock like yesterday, buy stock today because sold yesterday, or cooldown was yesterday
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i], dp[i - 1][3] - prices[i]);
            // Either still on at cooldown or sold stock yesterday and stay that way
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
            // Not holding stock as I sell stock today
            dp[i][2] = dp[i - 1][0] + prices[i]
            // Cooldown because yestday sold stock
            dp[i][3] = dp[i - 1][2];
        }

        return Math.max(dp[n - 1][1], dp[n - 1][2], dp[n - 1][3])
    }   
}
