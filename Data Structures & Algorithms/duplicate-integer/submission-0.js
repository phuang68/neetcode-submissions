class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.sort();
        for(let i = 0; i < sortedNums.length; i++){
            if(sortedNums[i] === sortedNums[i+1]) return true;
        }
        return false;
    }
}
