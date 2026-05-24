class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // Kadane‘s Algorithm DP
        let res = nums[0];
        // curMax, curMin to handle positive / negative situation
        let curMax = 1, curMin = 1;
        
        for(let i = 0; i < nums.length; i++) {
            // Avoid doubling current num for 
            const tmp = nums[i] * curMax;
            curMax = Math.max(Math.max(nums[i] * curMax, nums[i] * curMin), nums[i]);
            curMin = Math.min(Math.min(tmp, nums[i] * curMin), nums[i]);
            res = Math.max(curMax, res);
        }

        return res;
    }
}
