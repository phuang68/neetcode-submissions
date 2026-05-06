class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(let i = 0; i < nums.length; i++){
            let consec = 1;
            let start = nums[i] - 1;
            while(set.has(start)) {
                consec++;
                start--;
            }
            longest = Math.max(longest, consec);
        }
        return longest;
    }
}
