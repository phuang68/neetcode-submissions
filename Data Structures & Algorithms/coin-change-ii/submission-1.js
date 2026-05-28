class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        // dp[i][j] means, with the choice of i coins, the distinct combo to total up to amount of j
        const dp = Array.from({length: coins.length}, () => Array(amount + 1).fill(0));

        // Only one distinct combo to total up to amount of 0
        for(let i = 0; i < coins.length;i++) {
            dp[i][0] = 1;
        }

        // Since there's only one coin, the distinct combo can only be the same
        for(let amt = coins[0]; amt <= amount; amt++){
            dp[0][amt] = dp[0][amt - coins[0]];
        }

        for(let i = 1; i < coins.length; i++) {
            for(let amt = 1; amt <= amount; amt++) {
                // If current coin is bigger than the amount, we can only consider without the coin
                if(amt < coins[i]) {
                    dp[i][amt] = dp[i - 1][amt];
                } else {
                    dp[i][amt] = dp[i - 1][amt] + dp[i][amt - coins[i]]
                }
            }
        }

        return dp[coins.length - 1][amount];
    }
}
