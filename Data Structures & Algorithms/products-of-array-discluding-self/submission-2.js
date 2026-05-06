class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numProdLeft = new Array(nums.length)
        const numProdRight = new Array(nums.length)
        const res = new Array(nums.length)

        numProdLeft[0] = 1;
        numProdRight[nums.length - 1] = 1;

        for(let left = 1; left < nums.length; left++){
            numProdLeft[left] = numProdLeft[left - 1] * nums[left - 1];
        }

        for(let right = nums.length - 2; right >= 0; right--){
            numProdRight[right] = numProdRight[right + 1] * nums[right + 1];
        }

        for(let i = 0; i < nums.length; i++) {
            res[i] = numProdLeft[i] * numProdRight[i];
        }

        return res;
    }
}
