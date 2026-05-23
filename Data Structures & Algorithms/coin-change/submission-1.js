class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // DP Array of size amount to store the min num to get to the amount, initialize with -1
        const dp = new Array(amount + 1).fill(-1);
        dp[0] = 0;

        // All the dp[coin] only needs 1 coin
        for(const coin of coins) {
            if(coin <= amount) {
                dp[coin] = 1;
            }
        }

        // For each element in dp array, only update value if dp[i - coin] > 0
        for(let i = 1; i <= amount; i++) {
            for(const coin of coins) {
                if(coin < i && dp[i - coin] > 0) {
                    // if there was a solution, we compare if current one is better
                    if(dp[i] > 0) {
                        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                    } else {
                        // if dp[i] not initialized, we assume there's only one solution
                        dp[i] = dp[i - coin] + 1
                    }
                }
            }
        }

        return dp[amount];
    }
}
