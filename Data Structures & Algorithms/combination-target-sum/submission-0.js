class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const path = [];
        // nums = nums.sort((a, b) => a - b);

        const bt = (sum, start) => {
            if(sum === target) {
                res.push([...path]);
                return;
            }

            for(let i = start; i < nums.length && sum <= target; i++) {
                sum += nums[i]
                path.push(nums[i]);
                bt(sum, i);
                sum -= nums[i];
                path.pop();
            }
        }

        bt(0, 0);

        return res;
    }
}
