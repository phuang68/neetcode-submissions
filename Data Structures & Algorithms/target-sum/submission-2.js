class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        // Recursion solution
        nums.sort();

        const dfs = (i, sum) => {
            // Terminating when all combo went through and sum === target
            if(sum === target && i === nums.length) return 1;
            if(i >= nums.length) return 0;
            
            let res = 0;
            // Either subtract or add the current num to the sum
            res += dfs(i + 1, sum - nums[i]);
            res += dfs(i + 1, sum + nums[i]);

            return res;
        }

        return dfs(0, 0);
    }
}
