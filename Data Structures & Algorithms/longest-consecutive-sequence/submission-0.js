class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!hashSet.has(nums[i] - 1)) {
            let consecCount = 1;
            let start = nums[i];
            while (hashSet.has(start + consecCount)) {
                consecCount++;
            }
            res = Math.max(res, consecCount)
        }
    }
    return res;
    }
}
