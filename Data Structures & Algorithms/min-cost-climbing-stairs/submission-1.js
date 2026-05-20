class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Solution: dp top down
        // min cost to reach step i
        const dp = [...cost, 0];

        for(let i = dp.length - 3; i >= 0; i--) {
            dp[i] += Math.min(dp[i + 1], dp[i + 2]);
        }

        return Math.min(dp[0], dp[1]);
    }
}
