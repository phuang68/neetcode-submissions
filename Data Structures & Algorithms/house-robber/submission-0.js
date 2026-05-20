class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const houseAmount = nums.length;
        const dp = new Array(houseAmount).fill(0);
        
        dp[0] = nums[0];

        if(houseAmount < 2) {
            return dp[0];
        }
    
        dp[1] = Math.max(nums[1], dp[0]);

        for(let i = 2; i < houseAmount; i++){
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
        }

        return dp[houseAmount - 1];
    }
}
