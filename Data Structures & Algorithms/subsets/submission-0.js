class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const path = [];

        const backtracking = (startIndex) => {
            res.push([...path]);

            if(startIndex > nums.length){
                return;
            }

            for(let i = startIndex; i < nums.length; i++) {
                path.push(nums[i]);
                backtracking(i + 1);
                path.pop();
            }
        }

        backtracking(0);

        return res;
    }
    
    
}
