class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        // Find pivot
        while(l < r) {
            let m = Math.floor((l + r) / 2);

            if(nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        let pivot = l;
        l = 0;
        r = nums.length - 1;
        
        if(nums[pivot] <= target && target <= nums[r]) {
            l = pivot;
        } else {
            r = pivot - 1;
        }

        console.log(l, r)

        while(l <= r) {
             let m = Math.floor((l + r) / 2);

             if(nums[m] < target) {
                l = m + 1;
             } else if (nums[m] > target) {
                r = m - 1;
             } else {
                return m;
             }
        }

        return -1;
    }
}
