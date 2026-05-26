class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        // Using reducer to get total sum
        let totalSum = nums.reduce((a, b) => a + b, 0);
        // Only even sum can be divide into 2 and make subset1 and subset2 equal
        if(totalSum % 2 === 1) return false;
        const target = totalSum / 2;
        // DP set to store all possible sum in nums if we have the target of half of the total sum
        let dpSet = new Set();
        dpSet.add(0);

        for(let i = nums.length - 1; i >= 0; i--) {
            // for storing new sum
            let nextDpSet = new Set();
            // Iterate through current dp set
            for(const t of dpSet) {
                // If there's a target, we have two equal subsets
                if(t === target) return true;
                // Either the sum include the current num or not
                nextDpSet.add(t);
                nextDpSet.add(t + nums[i]);
            }

            dpSet = nextDpSet;
        }

        return dpSet.has(target);
    }
}
