class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // DP Array of size amount to store the min num to get to the amount, initialize with amount + 1 for result return
        const dp = new Array(amount + 1).fill(amount + 1);
        
        dp[0] = 0;

        // For each amount in dp array, only update when coin is less than current amount
        for(let i = 1; i <= amount; i++) {
            for(const coin of coins) {
                if(coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
