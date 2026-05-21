class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) {
            return 0;
        }

        if(nums.length === 1) {
            return nums[0];
        }

        const dpHelper = (houses) => {
            if(houses.length === 0) return 0;
            if(houses.length === 1) return houses[0];

            const dp = new Array(houses.length).fill(0);
            dp[0] = houses[0];
            dp[1] = Math.max(houses[0], houses[1]);

            for(let i = 2; i < houses.length; i++) {
                dp[i] = Math.max(dp[i - 2] + houses[i], dp[i - 1]);
            }

            return dp[houses.length - 1];
        }

        return Math.max(dpHelper(nums.slice(1)), dpHelper(nums.slice(0, -1)));
    }   
}
