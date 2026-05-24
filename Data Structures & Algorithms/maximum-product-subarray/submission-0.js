class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // Brute force
        let max = -Infinity;
        for(let i = 0; i < nums.length; i++) {
            let product = nums[i];
            max = Math.max(product, max);
            for(let j = i + 1; j < nums.length; j++) {
                product *= nums[j];
                max = Math.max(product, max);
            }
        }
        return max;
    }
}
