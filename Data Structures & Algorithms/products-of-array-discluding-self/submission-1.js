class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);

        for(let i = 0; i < nums.length; i++){
            let left = i - 1;
            let preffix = 1;
            while(left >= 0) {
                preffix *= nums[left];
                left--;
            }
            let right = i + 1;
            let suffix = 1;
            while(right < nums.length) {
                suffix *= nums[right];
                right++;
            }
            res[i] = preffix * suffix;
        }

        return res;
    }
}
