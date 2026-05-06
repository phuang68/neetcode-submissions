class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
           const res = [];

    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = nums.length - 1;
        let product = 1;

        while (left < i) {
            product *= nums[left];
            left++;
        }

        while (right > i) {
            product *= nums[right];
            right--;
        }

        res.push(product);
    }

    return res;
    }
}
