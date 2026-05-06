class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let minLeft = prices[0];

        for(let i = 0; i < prices.length; i++) {
            minLeft = Math.min(minLeft, prices[i]);
            max = Math.max(max, prices[i] - minLeft);
        }

        return max;
    }
}
