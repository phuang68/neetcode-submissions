class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};
        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = i;
        }
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const subtract = target - num;
            if (hashMap[subtract] !== undefined && hashMap[subtract] !== i) {
                return [i, hashMap[subtract]]
            }
        }
    }
}
