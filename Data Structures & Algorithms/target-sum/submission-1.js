class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        nums.sort();

        const dfs = (i, sum) => {
            if(sum === target && i === nums.length) return 1;
            if(i >= nums.length) return 0;
            
            let res = 0;
            res += dfs(i + 1, sum - nums[i]);
            res += dfs(i + 1, sum + nums[i]);

            return res;
        }

        return dfs(0, 0);
    }
}
