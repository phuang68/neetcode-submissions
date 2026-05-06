class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let maxP = 0;
    for (let i = 0; i < prices.length; i++) {
        const buy = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - buy;
            maxP = Math.max(profit, maxP);
        }
    }
    return maxP;
    }
}
