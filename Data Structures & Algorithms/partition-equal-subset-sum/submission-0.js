class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = 0;
        for(const num of nums) {
            totalSum += num;
        }
        // Only even sum can be divide into 2 and make subset1 and subset2 equal
        if(totalSum % 2 === 1) return false;
        const target = totalSum / 2;
        // DP set to store all possible sum in nums if we have the target of half of the total sum
        let dpSet = new Set();
        dpSet.add(0);

        for(let i = nums.length - 1; i >= 0; i--) {
            let nextDpSet = new Set();

            for(const t of dpSet) {
                if(t === target) return true;
                nextDpSet.add(t);
                nextDpSet.add(t + nums[i]);
            }

            dpSet = nextDpSet;
        }

        return dpSet.has(target);
    }
}
