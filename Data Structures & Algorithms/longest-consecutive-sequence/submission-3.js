class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(let i = 0; i < nums.length; i++){
            // Check if it's start
            if(!set.has(nums[i] - 1)){
                let length = 1;
                while(set.has(nums[i] + length)) {
                    length++
                }
            longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
