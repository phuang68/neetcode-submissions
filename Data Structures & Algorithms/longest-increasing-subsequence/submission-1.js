class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // DP: starting at idx, the longest increasing subsequence
        const n = nums.length;
        const lis = new Array(n).fill(1);
        // The lis at last idx can only be 1
        lis[n - 1] = 1;
        let max = 1;

        for(let i = n - 1; i >= 0; i--) {
            for(let j = i + 1; j < n; j++) {
                // Examine only if starting num i is smaller than cur num j
                if(nums[i] < nums[j]) {
                    lis[i] = Math.max(lis[i], 1 + lis[j]);
                    // Get the max along the way, because the first num might have be bigger than any other following num
                    max = Math.max(lis[i], max);
                }
            }
        }

        return max;
    }
}
