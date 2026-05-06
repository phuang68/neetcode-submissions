class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        for(let i = 0; i < prices.length; i++) {
            let j = i + 1;
            while(j < prices.length){
                max = Math.max(max, prices[j] - prices[i]);
                j++;
            }
        }

        return max;
    }
}
